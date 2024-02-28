import { ApiProperty } from '@nestjs/swagger';

export class KeywordQuery {
  @ApiProperty({
    description: 'Query',
    example: 'spider',
  })
  query: string;
}

export class Keyword {
  @ApiProperty({
    description: 'Keyword id',
    example: '28',
  })
  id: number;

  @ApiProperty({
    description: 'Keyword name',
    example: 'spider',
  })
  name: string;
}

export class KeywordsList {
  @ApiProperty({
    description: 'List of keywords',
    type: [Keyword],
  })
  genres: Keyword[];
}
