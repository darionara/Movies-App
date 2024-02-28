import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

import { GenresList } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<GenresList> {
    const { data } = await firstValueFrom(
      this.httpService.get('/genre/movie/list').pipe(
        catchError((error: AxiosError) => {
          throw `Error: ${error.message}`;
        }),
      ),
    );

    return data;
  }
}
