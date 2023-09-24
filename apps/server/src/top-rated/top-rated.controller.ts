import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { TopRatedService } from './top-rated.service';
import { TopRated, TopRatedQuery } from './entities/top-rated.entity';

@Controller('top-rated')
export class TopRatedController {
  constructor(private readonly topRatedService: TopRatedService) {}

  @Get()
  @ApiOkResponse({ type: TopRated })
  @ApiOperation({ summary: 'Get list of favorite movies' })
  findAll(@Query() query: TopRatedQuery) {
    return this.topRatedService.findAll(query);
  }
}
