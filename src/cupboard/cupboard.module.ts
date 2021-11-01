import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CupboardController } from './cupboard.controller';
import { CupboardService } from './cupboard.service';
import { Cupboard } from './entities/cupboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cupboard])],
  controllers: [CupboardController],
  providers: [CupboardService]
})
export class CupboardModule {}
