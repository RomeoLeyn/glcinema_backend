import { Expose } from 'class-transformer';

export class GenreResponseDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
