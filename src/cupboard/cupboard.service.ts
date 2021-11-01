import { Injectable, Logger, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryFilter } from 'src/query.filter';
import { Repository } from 'typeorm';
import { CreateCupboardDto } from './dto/create-cupboard.dto';
import { UpdateCupboardDto } from './dto/update-cupboard.dto';
import { Cupboard } from './entities/cupboard.entity';

@Injectable()
@UseFilters(CategoryFilter)
export class CupboardService {
  private readonly logger = new Logger(CupboardService.name);
  constructor(
    @InjectRepository(Cupboard)
    private cupBoardRepository: Repository<Cupboard>,
  ) {}
  async create(
    createCupboardDto: CreateCupboardDto,
  ): Promise<CreateCupboardDto> {
    const cupBoard: Cupboard = new Cupboard();
    cupBoard.product = createCupboardDto.product;
    cupBoard.expireDate = createCupboardDto.expireDate;
    cupBoard.quantity = createCupboardDto.quantity;
    cupBoard.status = createCupboardDto.status;
    this.logger.log(`Creating new Cupboard`);
    return await this.cupBoardRepository.save(cupBoard);
  }

  async findAll(): Promise<Cupboard[]> {
    this.logger.log(`Getting all cupboards`);
    return await this.cupBoardRepository.find({ relations: ['product',] });
  }

  async findOne(id: number): Promise<Cupboard> {
    this.logger.log(`Getting CupBoard by id:${id}`);
    return await this.cupBoardRepository.findOne(id);
  }

  update(id: number, updateCupboardDto: UpdateCupboardDto) {
    return `Not implemented yet`;
  }

  remove(id: number) {
    return `Not Implemented yet`;
  }
}
