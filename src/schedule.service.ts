import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './schedule.entity';
import { time } from 'console';
 
@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}
 
  async findAll(): Promise<Schedule[]> {
    return this.scheduleRepository.find();
  }

  async create(schedule:Schedule): Promise<Schedule> {
   
    return this.scheduleRepository.save(schedule);
  }

  async update(id :number,uptSchedule:Schedule): Promise<Schedule> {

    const schedule = await this.scheduleRepository.findOneBy({id});
    if (!schedule) {
      throw new Error('User not found');
    }
    Object.assign(schedule, uptSchedule);
    return this.scheduleRepository.save(schedule);
  }
  
  findOne(id: number): Promise<Schedule> {
    return this.scheduleRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.scheduleRepository.delete(id);
  }

}