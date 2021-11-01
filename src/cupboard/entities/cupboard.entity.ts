import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity, JoinTable, OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Cupboard {
  @PrimaryGeneratedColumn()
  id: string;
  @OneToMany(() => Product, (product) => product.cupBoard, { cascade: true })
  product: Product[];
  @Column()
  expireDate: Date;
  @Column()
  quantity: number;
  @Column()
  status: string;
}
