import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable, ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  type: string;
  @ManyToOne(type=> Product,product=>product.category)
  @JoinTable()
  products: Product[];

}