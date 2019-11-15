import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CalendarModule } from './calendar/calendar.module';
import { RdvModule } from './rdv/rdv.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Calendar } from './calendar/calendar.entity';
import { Rdv } from './rdv/rdv.entity';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "wstp1",
      "entities": [
        User,
        Calendar,
        Rdv
      ],
      "synchronize": true
    }),
    UsersModule,
    CalendarModule,
    RdvModule
  ],
})
export class AppModule { }