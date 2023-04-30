import { Injectable } from '@nestjs/common';
import { HelpersService } from 'src/helpers/helpers.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService, private helpers: HelpersService) {}

  async createSchool(data: CreateSchoolDto) {
    try {
      const school = await this.prisma.school.create({ data });
      return this.helpers.generateResponse(
        'Create school successfully',
        school,
      );
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }
  async getAllSchools() {
    try {
      const schools = await this.prisma.school.findMany();

      if (!schools) {
        return this.helpers.generateResponse('No School found');
      }

      return this.helpers.generateResponse(
        'Get all School successfully',
        schools,
      );
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }

  async getSchoolById(school_id: number) {
    try {
      const school = await this.prisma.school.findFirst({
        where: {
          id: school_id,
        },
      });
      if (!school) {
        return this.helpers.generateResponse('No School found');
      }

      return this.helpers.generateResponse('Find School successfully', school);
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }

  async updateSchool(school_id: number, data: UpdateSchoolDto) {
    try {
      const school = await this.prisma.school.update({
        where: {
          id: school_id,
        },
        data: data,
      });
      if (!school) {
        return this.helpers.generateResponse('Failed update school');
      }
      return this.helpers.generateResponse(
        'Updated school successfully',
        school,
      );
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }
  async deleteSchool(school_id: number) {
    try {
      const school = await this.prisma.school.delete({
        where: {
          id: school_id,
        },
      });
      if (!school) {
        return this.helpers.generateResponse('Failed delete school');
      }
      return this.helpers.generateResponse(
        'Delete school successfully',
        school,
      );
    } catch (error) {
      return this.helpers.catchError(error);
    }
  }
}
