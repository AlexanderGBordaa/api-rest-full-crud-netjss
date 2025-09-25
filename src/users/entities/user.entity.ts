
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @ApiProperty({
        description: 'ID único del usuario',
        example: '123e4567-e89b-12d3-a456-426614174000',
        format: 'uuid'
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Juan Pérez',
        minLength: 1,
        maxLength: 100
    })
    @Column({ length: 100 })
    name: string;

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'juan.perez@example.com',
        format: 'email'
    })
    @Column({ unique: true })
    email: string;

    @ApiProperty({
        description: 'Fecha de creación del usuario',
        example: '2023-09-20T12:00:00.000Z',
        type: 'string',
        format: 'date-time'
    })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({
        description: 'Fecha de última actualización del usuario',
        example: '2023-09-20T12:30:00.000Z',
        type: 'string',
        format: 'date-time'
    })
    @UpdateDateColumn()
    updatedAt: Date;

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}