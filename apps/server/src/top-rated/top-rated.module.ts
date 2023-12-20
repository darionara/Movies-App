import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import HttpConfigService from 'src/config/HttpConfigService';

import { TopRatedController } from './top-rated.controller';
import { TopRatedService } from './top-rated.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  controllers: [TopRatedController],
  providers: [TopRatedService],
})
export class TopRatedModule {}
