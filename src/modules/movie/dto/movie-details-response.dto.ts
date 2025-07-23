import { CountryResponseDto } from 'src/modules/country/dto/country-response.dto';
import { AgeLimit } from 'src/common/enums/age-limit.enum';
import { Format } from 'src/common/enums/format.enum';
import { Status } from 'src/common/enums/status.enum';
import { GenreResponseDto } from 'src/modules/genre/dto/genre-response.dto';

export class MovieDetailsResponseDto {
  id: number;
  titleUkr: string;
  titleOriginal: string;
  posterUrl: string;
  year: number;
  genres: GenreResponseDto[];
  dubLanguage: string;
  country: CountryResponseDto;
  duration: number;
  description: string;
  trailerUrl: string;
  format: Format;
  ageLimit: AgeLimit;
  startRentalDate: Date;
  finalRentalDate: Date;
  createdAt: Date;
  updatedAt: Date;
  status: Status;
}
