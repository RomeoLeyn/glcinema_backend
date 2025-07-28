import { Expose } from 'class-transformer';

export class CountryResponseDto {
  @Expose()
  id: number;

  @Expose()
  code: string;

  @Expose()
  name: string;

  @Expose()
  flagUrl: string;
}
