import { HttpService } from '@nestjs/axios';
import type { AxiosError } from 'axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class TopRatedService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get('/movie/top_rated').pipe(
        catchError((error: AxiosError) => {
          throw `Error jaki: ${error.message}`;
        }),
      ),
    );

    return data;
  }
}
