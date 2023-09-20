import { Controller, Get } from '@nestjs/common';
import { TopRatedService } from './top-rated.service';

@Controller('top-rated')
export class TopRatedController {
  constructor(private readonly topRatedService: TopRatedService) {}

  @Get()
  findAll() {
    return this.topRatedService.findAll();
  }
}
