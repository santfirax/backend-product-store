import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    this.logger.log("Creatin category")
    const category:Category = new Category();
    category.type=createCategoryDto.type;
    return await this.categoryRepository.save(category);
  }

  async findAll() {
    this.logger.log("Getting all categories")
    return await this.categoryRepository.find({relations:["products"]})
  }

  async findOne(id: number) {
    this.logger.log(`Getting category by id ${id}`)
    return await this.categoryRepository.findOne(id)
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
