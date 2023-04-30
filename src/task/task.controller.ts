import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private service: TaskService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth('accessToken')
  @Get()
  async getAllTasks() {
    return await this.service.getAllTasks();
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('accessToken')
  @Post()
  async createTask(@Body() task_data: CreateTaskDto) {
    return await this.service.createTask(task_data);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('accessToken')
  @Get(':task_id')
  async getTaskById(@Param('task_id') task_id: number) {
    return await this.service.getTaskById(+task_id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('accessToken')
  @Patch(':task_id')
  async updateTaskById(
    @Param('task_id') task_id: number,
    @Body() task_data: UpdateTaskDto,
  ) {
    return await this.service.updateTaskById(+task_id, task_data);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('accessToken')
  @Delete(':task_id')
  async deleteTask(@Param('task_id') task_id: number) {
    return await this.service.deleteTask(+task_id);
  }
}
