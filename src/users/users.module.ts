import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

import { CalendarService } from '../calendar/calendar.service';
import { CalendarController } from '../calendar/calendar.controller';
import { Calendar } from '../calendar/calendar.entity';

import { RdvService } from '../rdv/rdv.service';
import { RdvController } from '../rdv/rdv.controller';
import { Rdv } from '../rdv/rdv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Calendar]), TypeOrmModule.forFeature([Rdv])],
  providers: [UsersService, CalendarService, RdvService],
  controllers: [UsersController, CalendarController, RdvController],
})

export class UsersModule { }