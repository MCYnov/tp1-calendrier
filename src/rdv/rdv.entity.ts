import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rdv {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column('int')
    idCalendar: number;

    @Column('int')
    idUser: number;

    @Column('datetime')
    dtStart: Date;

    @Column('datetime')
    dtEnd: Date;
}
