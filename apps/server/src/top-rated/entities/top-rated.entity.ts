import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { SortingOptions } from 'common-types';

export class TopRatedQuery {
  @ApiPropertyOptional({ description: 'Current page' })
  page: number;

  @ApiPropertyOptional({
    description:
      'List of keywords IDs to filter with - IDs separated with "|" symbol',
    example: '158129',
  })
  keywords: string;

  @ApiPropertyOptional({ description: "Minimum count of user's votes" })
  min_user_votes: number;

  @ApiPropertyOptional({
    description: 'The range of minimum and maximum votes',
    example: '200,500',
  })
  average_votes: string;

  @ApiPropertyOptional({
    description:
      'List of genres IDs to filter with. Ids separated with "|" symbol',
    example: '12|35',
  })
  genres: string;

  @ApiPropertyOptional({
    description: 'Sorting options',
    example: 'popularity.asc',
  })
  sort: SortingOptions;
}

export class ListMovie {
  @ApiProperty({ description: 'Url to poster image' })
  poster_image: string;

  @ApiProperty({ example: 238 })
  id: number;

  @ApiProperty({ description: 'Average rate of the movie', example: 75 })
  rate: number;

  @ApiProperty({
    description: 'Date of release in format: YYYY-MM-DD',
    example: '1972-03-14',
  })
  release_date: string;

  @ApiProperty({ description: 'Title of the movie', example: 'The Godfather' })
  title: string;
}

export class TopRated {
  @ApiProperty({
    description: 'The list of movies',
    type: [ListMovie],
  })
  data: ListMovie[];

  @ApiProperty({
    description: 'List meta data',
    type: 'object',
    properties: {
      page: {
        type: 'number',
        example: 1,
      },
      total_pages: {
        type: 'number',
        example: 100,
      },
      total_results: {
        type: 'number',
        example: 999,
      },
    },
  })
  meta: {
    page: number;
    total_pages: number;
    total_results: number;
  };
}
