import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDTO } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAllProducts(): Promise<ProductDTO[]> {
    this.logger.log('Getting all products');
    return await this.productsRepository.find();
  }
  async findOneProductById(id: number): Promise<ProductDTO> {
    this.logger.log('Getting product by id `${id}`', id);
    return await this.productsRepository.findOne(id);
  }
  async deleteProductById(id: number): Promise<void> {
    this.logger.log('Deleting product by id `${id}`', id);
    await this.productsRepository.delete(id);
  }
  async createProduct(productDTO: ProductDTO): Promise<Product> {
    const product: Product = new Product();
    product.id = productDTO.id;
    product.description = productDTO.description;
    product.isExpired = productDTO.isExpired;
    product.name = productDTO.name;
    this.logger.log('Creating product')
    return await this.productsRepository.save(product);
  }
}
