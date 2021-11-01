import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CupboardService } from './cupboard.service';
import { CreateCupboardDto } from './dto/create-cupboard.dto';
import { UpdateCupboardDto } from './dto/update-cupboard.dto';

@Controller('/v1/cupboard')
export class CupboardController {
  constructor(private readonly cupboardService: CupboardService) {}

  @Post()
  async create(@Body() createCupboardDto: CreateCupboardDto) {
    return this.cupboardService.create(createCupboardDto);
  }

  @Get()
  async findAll() {
    return this.cupboardService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cupboardService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCupboardDto: UpdateCupboardDto,
  ) {
    return this.cupboardService.update(+id, updateCupboardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cupboardService.remove(+id);
  }
}
