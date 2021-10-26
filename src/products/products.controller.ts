import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  async findAllProducts() {
    return await this.productService.findAllProducts();
  }
  @Get(':productId')
  async findProductById(@Param('productId') productId: number) {
    return await this.productService.findOneProductById(productId);
  }
  @Post()
  @HttpCode(200)
  async create(@Body() productDTO: ProductDTO) {
    return await this.productService.createProduct(productDTO);
  }
  @Delete()
  @HttpCode(204)
  async delete(@Param('productId') productId: number) {
    return await this.productService.deleteProductById(productId);
  }
}
