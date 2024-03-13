import { ApiProperty } from '@nestjs/swagger';

export class SearchMovieQuery {
  @ApiProperty({
    description: 'Query',
    example: 'spider',
  })
  query: string;
}

export class SearchMovie {
  @ApiProperty({
    description: 'Movie id',
    example: '28',
  })
  id: number;

  @ApiProperty({
    description: 'Movie title',
    example: 'Spider-Man: No Way Home',
  })
  title: string;

  @ApiProperty({ description: 'Url to poster image' })
  poster_image: string;

  @ApiProperty({
    description: 'Date of release in format: YYYY-MM-DD',
    example: '1972-03-14',
  })
  release_date: string;
}

export class SearchMovieList {
  @ApiProperty({
    description: 'List of movies',
    type: [SearchMovie],
  })
  movies: SearchMovie[];
}
