import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

import {
  SearchMovieList,
  SearchMovieQuery,
} from './entities/search-movie.entity';

@Injectable()
export class SearchMovieService {
  constructor(private readonly httpService: HttpService) {}

  private readonly staticQueries = {
    language: 'en-US',
    page: 1,
    include_adult: false,
  };

  async findAll(query: SearchMovieQuery): Promise<SearchMovieList> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('/search/movie', { params: query, ...this.staticQueries })
        .pipe(
          catchError((error: AxiosError) => {
            throw `Error: ${error.message}`;
          }),
        ),
    );

    const { data: configData } = await firstValueFrom(
      this.httpService.get('/configuration').pipe(
        catchError((error: AxiosError) => {
          throw `Error: ${error.message}`;
        }),
      ),
    );

    const { secure_base_url: imagesBaseUrl, poster_sizes } = configData.images;

    return data.results.map((result: any = {}) => ({
      id: result.id,
      title: result.title,
      poster_image: `${imagesBaseUrl}${poster_sizes[3]}${result.poster_path}`,
      release_date: result.release_date,
    }));
  }
}
