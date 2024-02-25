import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import HttpConfigService from 'src/config/HttpConfigService';

import { KeywordService } from './keyword.service';
import { KeywordController } from './keyword.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  controllers: [KeywordController],
  providers: [KeywordService],
})
export class KeywordModule {}
