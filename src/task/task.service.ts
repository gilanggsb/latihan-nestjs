import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HelpersService } from 'src/helpers/helpers.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private helpers: HelpersService,
    @Inject(REQUEST) private req: any,
  ) {}

  /**
   * Get all tasks
   * @returns
   */
  async getAllTasks() {
    try {
      const tasks = await this.prisma.tasks.findMany({
        where: {
          id_user: this.req.user.id,
        },
        include: {
          user: {
            select: {
              id: true,
              avatar: true,
              email: true,
              name: true,
            },
          },
        },
      });
      return this.helpers.generateResponse('Successfully get all tasks', tasks);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async getTaskById(task_id: number) {
    try {
      const task = await this.prisma.tasks.findFirst({
        where: {
          id: task_id,
          id_user: this.req.user.id,
        },
      });
      return this.helpers.generateResponse('Successfully get task by id', task);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async createTask(data: CreateTaskDto) {
    try {
      data.id_user = this.req.user.id;
      const task = await this.prisma.tasks.create({
        data: data,
      });
      return this.helpers.generateResponse('Successfully create task', task);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async updateTaskById(task_id: number, data: UpdateTaskDto) {
    try {
      data.id_user = this.req.user.id;
      const task = await this.prisma.tasks.update({
        data: data,
        where: {
          id: task_id,
        },
      });
      return this.helpers.generateResponse('Successfully update task', task);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async deleteTask(task_id: number) {
    try {
      const task = await this.prisma.tasks.delete({
        where: {
          id: task_id,
        },
      });
      return this.helpers.generateResponse('Successfully delete task', task);
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }
}
