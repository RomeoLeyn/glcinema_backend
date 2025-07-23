import { CountryResponseDto } from 'src/modules/country/dto/country-response.dto';
import { Status } from 'src/common/enums/status.enum';
import { GenreResponseDto } from 'src/modules/genre/dto/genre-response.dto';

export class MoviesResponseDto {
  id: number;
  titleUkr: string;
  titleOriginal: string;
  posterUrl: string;
  year: number;
  genres: GenreResponseDto[];
  dubLanguage: string;
  country: CountryResponseDto;
  status: Status;
}
