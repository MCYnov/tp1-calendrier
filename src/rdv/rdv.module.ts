import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RdvService } from './rdv.service';
import { RdvController } from './rdv.controller';
import { Rdv } from './rdv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rdv])],
  providers: [RdvService],
  controllers: [RdvController],
})

export class RdvModule { }