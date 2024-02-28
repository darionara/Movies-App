import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { GenreService } from './genre.service';
import { GenresList } from './entities/genre.entity';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  @ApiOkResponse({ type: GenresList })
  @ApiOperation({ summary: 'Get list of genres' })
  findAll() {
    return this.genreService.findAll();
  }
}
