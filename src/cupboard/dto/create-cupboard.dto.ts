import { Product } from 'src/products/entities/product.entity';

export class CreateCupboardDto {
  readonly product: Product[];
  readonly expireDate: Date;
  readonly quantity: number;
  readonly status: string;
}
