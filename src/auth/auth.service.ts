import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HelpersService } from 'src/helpers/helpers.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/RegisterDto';
import { LoginDto } from './dto/LoginDto';
import { compare, hash } from 'bcryptjs';
import { UpdateProfileDto } from './dto/UpdateProfileDto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private helpers: HelpersService) {}

  async register(data: RegisterDto) {
    try {
      const checkUser = await this.prisma.users.findFirst({
        where: { email: data.email },
      });
      if (checkUser) {
        return this.helpers.generateResponse('User already registered');
      }
      data.password = await hash(data.password, 12);
      const user = await this.prisma.users.create({
        data,
      });
      const excludeUser = await this.helpers.exclude(user, [
        'password',
        'created_at',
      ]);
      return this.helpers.generateResponse(
        'Register Successfully',
        excludeUser,
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(error, HttpStatus.BAD_GATEWAY, {
        cause: new Error(error),
      });
    }
  }
  async login(data: LoginDto) {
    try {
      const user = await this.prisma.users.findFirst({
        where: { email: data.email },
        include: { tasks: true },
      });
      let comparePassword: string;

      if (user) {
        comparePassword = await compare(data.password, user.password);
      }

      if (!user || !comparePassword) {
        throw new HttpException(
          'Email or password not match',
          HttpStatus.BAD_REQUEST,
        );
      }

      const excludeUser = await this.helpers.exclude(user, [
        'password',
        'created_at',
      ]);

      const generateAccessToken = await this.helpers.generateJWT({
        sub: excludeUser.id,
        email: excludeUser.email,
        name: excludeUser.name,
      });

      return this.helpers.generateResponse('Login success', {
        ...excludeUser,
        accessToken: generateAccessToken,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async getDetailUser(user_id: number) {
    try {
      const user = await this.prisma.users.findFirst({
        where: { id: user_id },
        include: { tasks: true, school: true },
      });
      const excludeUser = await this.helpers.exclude(user, [
        'password',
        'created_at',
      ]);
      if (!excludeUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return {
        statusCode: HttpStatus.OK,
        data: user,
        message: 'Success get profile',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async uploadAvatar(user_id: number, avatar: string) {
    try {
      const user = await this.prisma.users.findFirst({
        where: { id: user_id },
      });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      const updatedUserAvatar = await this.prisma.users.update({
        where: {
          id: user_id,
        },
        data: {
          avatar: avatar,
        },
      });

      if (!updatedUserAvatar) {
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }

      return this.helpers.generateResponse('Success Upload Avatar');
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }
  async updateProfile(user_id: number, data: UpdateProfileDto) {
    try {
      const user = await this.prisma.users.update({
        where: { id: user_id },
        data,
      });
      if (!user) {
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }
      const excludeUser = this.helpers.exclude(user, [
        'password',
        'created_at',
      ]);
      return this.helpers.generateResponse(
        'Update Profile Success',
        excludeUser,
      );
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }
}
