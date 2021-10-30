import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @OneToMany(type=>Category,category=>category.products,{
        cascade:true
    })
    category:Category;
    @Column()
    barCode:string;
}
