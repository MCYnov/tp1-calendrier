import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CalendarService } from '../calendar/calendar.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService, private calendarService: CalendarService) { }

    @Get()
    gets(){
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Get(':id/calendar')
    getCalendar(@Param() params) {
        console.log("Get all calendar by user id : ", params);
        return this.calendarService.getCalendarByUserId(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}