import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:50,nullable:false})
    name:string;
    @Column({length:200,nullable:true})
    description:string;
    @Column({nullable:false})
    isExpired:boolean;
}
