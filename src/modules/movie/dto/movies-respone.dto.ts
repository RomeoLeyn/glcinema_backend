import { CountryResponseDto } from 'src/modules/country/dto/country-response.dto';
import { Status } from 'src/common/enums/status.enum';
import { GenreResponseDto } from 'src/modules/genre/dto/genre-response.dto';
import { Expose, Type } from 'class-transformer';

export class MoviesResponseDto {
  @Expose()
  id: number;

  @Expose()
  titleUkr: string;

  @Expose()
  titleOriginal: string;

  @Expose()
  posterUrl: string;

  @Expose()
  year: number;

  @Expose()
  @Type(() => GenreResponseDto)
  genres: GenreResponseDto[];

  @Expose()
  dubLanguage: string;

  @Expose()
  @Type(() => CountryResponseDto)
  country: CountryResponseDto;

  @Expose()
  status: Status;
}
