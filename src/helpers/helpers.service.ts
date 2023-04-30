import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { extname } from 'path';
import { jwt_config } from 'src/config/config_jwt';
import { diskStorage } from 'multer';

@Injectable()
export class HelpersService {
  constructor(private jwtService: JwtService) {}
  // Exclude keys from user
  exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[],
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }

  //generate jwt
  async generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwt_config.secret,
      expiresIn: jwt_config.expired,
    });
  }

  //generate response
  generateResponse(message: string, data?: any, statusCode?: number) {
    return {
      statusCode: statusCode | HttpStatus.OK,
      message,
      data,
    };
  }

  static avatarMulterOptions: MulterOptions = {
    // limits: {
    //   fileSize: +process.env.MAX_FILE_SIZE,
    // },
    // Check the mimetypes to allow for upload
    fileFilter: (req: any, file: any, cb: any) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
        // Reject file
        cb(
          new HttpException(
            `Unsupported file type ${extname(file.originalname)}`,
            HttpStatus.BAD_REQUEST,
          ),
          false,
        );
      }
      // Allow storage of file
      cb(null, true);
    },
    storage: diskStorage({
      destination: 'public/uploads/images',
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  };

  catchError(error: any, message?: string) {
    const errorMessage = message || error;
    if (error instanceof HttpException) {
      throw error;
    }

    throw new HttpException(errorMessage, HttpStatus.BAD_GATEWAY, {
      cause: new Error(errorMessage),
    });
  }
}
