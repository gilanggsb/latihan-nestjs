import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwt_config } from './config/config_jwt';
import { HelpersModule } from './helpers/helpers.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    TaskModule,
    PrismaModule,
    JwtModule.register({
      secret: jwt_config.secret,
      signOptions: {
        expiresIn: jwt_config.expired,
      },
      global: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    HelpersModule,
    AuthModule,
    SchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
