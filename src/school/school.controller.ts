import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('school')
@Controller('school')
export class SchoolController {
  constructor(private service: SchoolService) {}

  @Post()
  async createSchool(@Body() data: CreateSchoolDto) {
    return this.service.createSchool(data);
  }

  @Get()
  async getAllSchools() {
    return this.service.getAllSchools();
  }

  @Get(':school_id')
  async getSchoolBySchoolId(@Param('school_id') school_id: number) {
    return this.service.getSchoolById(+school_id);
  }

  @Patch(':school_id')
  async updateSchool(
    @Param('school_id') school_id,
    @Body() data: CreateSchoolDto,
  ) {
    return this.service.updateSchool(+school_id, data);
  }

  @Delete(':school_id')
  async deleteSchool(@Param('school_id') school_id: number) {
    return this.service.deleteSchool(+school_id);
  }
}
