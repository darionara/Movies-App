import { HttpService } from '@nestjs/axios';
import type { AxiosError } from 'axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

import { TopRated, TopRatedQuery } from './entities/top-rated.entity';

@Injectable()
export class TopRatedService {
  constructor(private readonly httpService: HttpService) {}

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
    };
  }

  async findAll(query: TopRatedQuery): Promise<TopRated> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('/movie/top_rated', { params: this.formatQuery(query) })
        .pipe(
          catchError((error: AxiosError) => {
            throw `Error jaki: ${error.message}`;
          }),
        ),
    );

    const responseBody: TopRated = {
      data: data.results.map((result: any = {}) => ({
        backdrop_image: result.backdrop_path,
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
