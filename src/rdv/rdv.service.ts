import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rdv } from './rdv.entity';

@Injectable()
export class RdvService {

    constructor(@InjectRepository(Rdv) private RdvRepository: Repository<Rdv>) { }

    async getRdvs(rdv: Rdv): Promise<Rdv[]> {
        return await this.RdvRepository.find();
    }

    async getRdv(_id: number): Promise<Rdv[]> {
        return await this.RdvRepository.find({
            select: ["id", "name", "idUser", "idCalendar", "dtStart", "dtEnd"],
            where: [{ "id": _id }]
        });
    }

    async getRdvByCalendarId(_id: number): Promise<Rdv[]> {
        return await this.RdvRepository.find({
            select: ["id", "name", "idUser", "idCalendar", "dtStart", "dtEnd"],
            where: [{ "idCalendar": _id }]
        });
    }

    async createRdv(rdv: Rdv) {
        console.log("New rdv : ", rdv);
        this.RdvRepository.save(rdv);
    }

    async updateRdv(rdv: Rdv) {
        console.log("Update rdv : ", rdv);
        this.RdvRepository.save(rdv);
    }

    async deleteRdv(rdv: Rdv) {
        console.log("Delete rdv : ", rdv);
        this.RdvRepository.delete(rdv);
    }
}