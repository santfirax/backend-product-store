import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<CreateProductDto> {
    const product: Product = new Product();
    product.name = createProductDto.name;
    product.barCode = createProductDto.barCode;
    product.categories = createProductDto.categories;
    this.logger.log(`Creating product with name:${product.name}`);
    return await this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    this.logger.log(`Getting all products`);
    return await this.productRepository.find({relations:["categories"]});
  }

  async findOneProductByName(name: string): Promise<Product> {
    this.logger.log(`Getting product by name:${name}`);
    return await this.productRepository.findOne({ name });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `Not Implemented yet`;
  }

  async removeProductByName(name: string) {
    this.logger.log(`Deleting product by name:${name}`);
    return await this.productRepository.delete({ name });
  }
}
