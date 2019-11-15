import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { Calendar } from './calendar.entity';

import { RdvService } from '../rdv/rdv.service';
import { RdvController } from '../rdv/rdv.controller';
import { Rdv } from '../rdv/rdv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calendar]), TypeOrmModule.forFeature([Rdv])],
  providers: [CalendarService, RdvService],
  controllers: [CalendarController, RdvController],
})

export class CalendarModule { }