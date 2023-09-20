import { Test, TestingModule } from '@nestjs/testing';
import { TopRatedController } from './top-rated.controller';
import { TopRatedService } from './top-rated.service';

describe('TopRatedController', () => {
  let controller: TopRatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopRatedController],
      providers: [TopRatedService],
    }).compile();

    controller = module.get<TopRatedController>(TopRatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
