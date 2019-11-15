import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Calendar {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column('int')
    idUser: number;
}
