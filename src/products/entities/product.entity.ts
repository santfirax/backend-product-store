import { Category } from 'src/categories/entities/category.entity';
import { Cupboard } from 'src/cupboard/entities/cupboard.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Category, (category) => category.products, {
    cascade: ['update'],
  })
  @JoinTable()
  categories: Category[];
  @Column()
  barCode: string;
  @ManyToOne(() => Cupboard, (cupBoard) => cupBoard.product)
  @JoinColumn()
  cupBoard: Cupboard;
}
