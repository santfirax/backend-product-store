import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity, ManyToMany, PrimaryGeneratedColumn
} from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique:true})
  type: string;
  @ManyToMany((type) => Product, (product) => product.categories)
  products: Product[];
}
