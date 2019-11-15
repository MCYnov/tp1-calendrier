import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { Calendar } from './calendar.entity';
import { RdvService } from '../rdv/rdv.service';

@Controller('calendar')
export class CalendarController {

    constructor(private service: CalendarService, private rdvService: RdvService) { }
    
    @Get()
    gets(){
        return this.service.getCalendars();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getCalendar(params.id);
    }

    @Get(':id/rdv')
    getRdv(@Param() params) {
        return this.rdvService.getRdvByCalendarId(params.id);
    }

    @Post()
    create(@Body() calendar: Calendar) {
        return this.service.createCalendar(calendar);
    }

    @Put()
    update(@Body() calendar: Calendar) {
        return this.service.updateCalendar(calendar);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteCalendar(params.id);
    }
}