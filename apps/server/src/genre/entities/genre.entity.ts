import { ApiProperty } from '@nestjs/swagger';

export class Genre {
  @ApiProperty({
    description: 'Genre id',
    example: '28',
  })
  id: number;

  @ApiProperty({
    description: 'Genre name',
    example: 'Action',
  })
  name: string;
}

export class GenresList {
  @ApiProperty({
    description: 'List of genres',
    type: [Genre],
  })
  genres: Genre[];
}
