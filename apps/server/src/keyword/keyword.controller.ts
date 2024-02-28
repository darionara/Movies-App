import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { KeywordService } from './keyword.service';
import { KeywordQuery, KeywordsList } from './entities/keyword.entity';

@Controller('keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}

  @Get()
  @ApiOkResponse({ type: KeywordsList })
  @ApiOperation({ summary: 'Get list of keywords' })
  findAll(@Query() query: KeywordQuery) {
    return this.keywordService.findAll(query);
  }
}
