import { PartialType } from '@nestjs/swagger';
import { CreateCupboardDto } from './create-cupboard.dto';

export class UpdateCupboardDto extends PartialType(CreateCupboardDto) {}
