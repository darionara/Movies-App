import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { TopRatedModule } from './top-rated/top-rated.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TopRatedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
