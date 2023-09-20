import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createHttpOptions(): HttpModuleOptions | Promise<HttpModuleOptions> {
    return {
      baseURL: this.configService.get('tmdb.baseUrl'),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.configService.get('tmdb.apiToken')}`,
      },
    };
  }
}

export default HttpConfigService;
