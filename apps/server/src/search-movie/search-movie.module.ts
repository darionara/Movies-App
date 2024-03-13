import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import HttpConfigService from 'src/config/HttpConfigService';

import { SearchMovieService } from './search-movie.service';
import { SearchMovieController } from './search-movie.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  controllers: [SearchMovieController],
  providers: [SearchMovieService],
})
export class SearchMovieModule {}
