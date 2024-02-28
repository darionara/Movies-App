import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import HttpConfigService from 'src/config/HttpConfigService';

import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
