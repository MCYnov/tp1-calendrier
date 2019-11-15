import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendar } from './calendar.entity';

@Injectable()
export class CalendarService {

    constructor(@InjectRepository(Calendar) private CalendarRepository: Repository<Calendar>) { }

    async getCalendars(): Promise<Calendar[]> {
        return await this.CalendarRepository.find();
    }

    async getCalendar(_id: number): Promise<Calendar[]> {
        return await this.CalendarRepository.find({
            select: ["id", "name", "idUser"],
            where: [{ "id": _id }]
        });
    }

    async getCalendarByUserId(_id: number): Promise<Calendar[]>
    {
        return await this.CalendarRepository.find({
            select: ["id", "name", "idUser"],
            where: [{"idUser": _id}]
        });
    }

    async createCalendar(calendar: Calendar) {
        console.log("New Calendar : ", calendar);
        this.CalendarRepository.save(calendar);
    }

    async updateCalendar(calendar: Calendar) {
        console.log("Update calendar : ", calendar);
        this.CalendarRepository.save(calendar);
    }

    async deleteCalendar(calendar: Calendar) {
        console.log("Delete Calendar : ", calendar);
        this.CalendarRepository.delete(calendar);
    }
}