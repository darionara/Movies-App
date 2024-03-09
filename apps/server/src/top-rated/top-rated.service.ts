import { HttpService } from '@nestjs/axios';
import type { AxiosError } from 'axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

import { TopRated, TopRatedQuery } from './entities/top-rated.entity';

@Injectable()
export class TopRatedService {
  constructor(private readonly httpService: HttpService) {}

  private readonly staticQueries = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    without_genres: '99,10755',
  };

  private formatQuery(query: TopRatedQuery) {
    const { average_votes, genres, keywords, min_user_votes, page, sort } =
      query;

    const [minAverage, maxAverage] = decodeURIComponent(average_votes)
      .split(',')
      .map((val) => Number(val) / 10);

    return {
      'vote_average.gte': minAverage,
      'vote_average.lte': maxAverage,
      with_genres: genres,
      with_keywords: keywords,
      'vote_count.gte': min_user_votes,
      page,
      sort_by: sort,
      ...this.staticQueries,
    };
  }

  async findAll(query: TopRatedQuery): Promise<TopRated> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('/discover/movie', { params: this.formatQuery(query) })
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

    const responseBody: TopRated = {
      data: data.results.map((result: any = {}) => ({
        poster_image: `${imagesBaseUrl}${poster_sizes[3]}${result.poster_path}`,
        id: result.id,
        rate: result.vote_average * 10,
        release_date: result.release_date,
        title: result.title,
      })),
      meta: {
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
      },
    };

    return responseBody;
  }
}
