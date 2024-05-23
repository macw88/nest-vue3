import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { ScheduleModule } from './schedule.Module';
import { Schedule } from './schedule.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.101.53.73',
      port: 3306,
      username: 'test',
      password: 'Test@12345',
      database: 'beego',
      autoLoadEntities: true, // 自动加载实体
      synchronize: true, // 同步数据库结构，仅用于开发环境
    }),
    // RedisModule.forRoot({
    //   host: 'localhost',
    //   port: 6379,
    //   db: 0,
    //   password: 'your_redis_password', // 如果有密码的话
    // }),
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
