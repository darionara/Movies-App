import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

import { KeywordQuery, KeywordsList } from './entities/keyword.entity';

@Injectable()
export class KeywordService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(query: KeywordQuery): Promise<KeywordsList> {
    const { data } = await firstValueFrom(
      this.httpService.get('/search/keyword', { params: query }).pipe(
        catchError((error: AxiosError) => {
          throw `Error: ${error.message}`;
        }),
      ),
    );

    return data.results;
  }
}
