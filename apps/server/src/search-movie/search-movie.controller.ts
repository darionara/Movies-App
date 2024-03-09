import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import {
  SearchMovieQuery,
  SearchMovieList,
} from './entities/search-movie.entity';
import { SearchMovieService } from './search-movie.service';

@Controller('search-movie')
export class SearchMovieController {
  constructor(private readonly searchMovieService: SearchMovieService) {}

  @Get()
  @ApiOkResponse({ type: SearchMovieList })
  @ApiOperation({ summary: 'Get list of searched movies' })
  findAll(@Query() query: SearchMovieQuery) {
    return this.searchMovieService.findAll(query);
  }
}
