import { Test, TestingModule } from '@nestjs/testing';
import { SearchMovieController } from './search-movie.controller';
import { SearchMovieService } from './search-movie.service';

describe('SearchMovieController', () => {
  let controller: SearchMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchMovieController],
      providers: [SearchMovieService],
    }).compile();

    controller = module.get<SearchMovieController>(SearchMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
