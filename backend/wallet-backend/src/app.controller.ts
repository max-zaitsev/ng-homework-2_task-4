import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CardEntity } from './card.entity';

@Controller()
export class AppController {
  constructor(private dbService: InMemoryDBService<any>) {}

  @Get()
  getAll(): CardEntity[] {
    return this.dbService.getAll();
  }

  @Post()
  create(@Body() dto: Partial<CardEntity>): CardEntity {
    return this.dbService.create(dto);
  }

  @Post('seed')
  seed(): CardEntity[] {
    this.dbService.seed(
      (idx: number) => ({
        id: String(idx + 1),
        name: `Name-${idx + 1}`,
        description: idx + 1 + 10,
      }),
      5,
    );
    return this.dbService.getAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.dbService.delete(id);
  }

  @Put()
  edit(@Body() dto: Partial<CardEntity>): void {
    return this.dbService.update(dto);
  }
}
