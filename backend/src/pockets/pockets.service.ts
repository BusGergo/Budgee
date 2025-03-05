import { Injectable } from '@nestjs/common';
import { CreatePocketDto } from './dto/create-pocket.dto';
import { UpdatePocketDto } from './dto/update-pocket.dto';

@Injectable()
export class PocketsService {
  create(createPocketDto: CreatePocketDto) {
    return 'This action adds a new pocket';
  }

  findAll() {
    return `This action returns all pockets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pocket`;
  }

  update(id: number, updatePocketDto: UpdatePocketDto) {
    return `This action updates a #${id} pocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} pocket`;
  }
}
