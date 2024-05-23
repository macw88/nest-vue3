import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.entity';
import { QueryResponse } from './queryresponse.interface';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  async getList(): Promise<QueryResponse<Schedule[]>> {
    try {
      const list =  await this.scheduleService.findAll(); // 假设这里是查询所有用户的方法
      return {code: 200, data: list, msg: '查询成功' };
    } catch (error) {
      return {code: 500, data: null, msg: '查询失败' };
    }
  }

  @Get(':id')
  async getInfoById(@Param('id') id: string): Promise<Schedule> {
    return this.scheduleService.findOne(parseInt(id, 10));
  }

  @Post()
  async createSchedule(@Body() schedule: Schedule): Promise<Schedule> {
    return this.scheduleService.create(schedule);
  }

  @Put(':id')
  async updateScheduleById(@Param('id') id: string, @Body() updatedTodo: Schedule): Promise<Schedule> {
    return this.scheduleService.update(parseInt(id, 10), updatedTodo);
  }

  @Delete(':id')
  async deleteScheduleById(@Param('id') id: string): Promise<void> {
    return this.scheduleService.remove(parseInt(id, 10));
  }
}
