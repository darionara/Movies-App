import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';
import { TopRatedModule } from './top-rated/top-rated.module';
import { GenreModule } from './genre/genre.module';
import { KeywordModule } from './keyword/keyword.module';
import { SearchMovieModule } from './search-movie/search-movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TopRatedModule,
    GenreModule,
    KeywordModule,
    SearchMovieModule,
  ],
})
export class AppModule {}
