import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';
import { TopRatedModule } from './top-rated/top-rated.module';
import { GenreModule } from './genre/genre.module';
import { KeywordModule } from './keyword/keyword.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TopRatedModule,
    GenreModule,
    KeywordModule,
  ],
})
export class AppModule {}
