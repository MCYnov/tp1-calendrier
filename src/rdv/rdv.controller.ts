import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { RdvService } from './rdv.service';
import { Rdv } from './rdv.entity';

@Controller('rdv')
export class RdvController {

    constructor(private service: RdvService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRdv(params.id);
    }

    @Post()
    create(@Body() rdv: Rdv) {
        return this.service.createRdv(rdv);
    }

    @Put()
    update(@Body() rdv: Rdv) {
        return this.service.updateRdv(rdv);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteRdv(params.id);
    }
}