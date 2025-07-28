import { CountryResponseDto } from 'src/modules/country/dto/country-response.dto';
import { AgeLimit } from 'src/common/enums/age-limit.enum';
import { Format } from 'src/common/enums/format.enum';
import { Status } from 'src/common/enums/status.enum';
import { GenreResponseDto } from 'src/modules/genre/dto/genre-response.dto';
import { CommentResponseDto } from 'src/modules/comment/dto/comment-response.dto';
import { Expose, Type } from 'class-transformer';

export class MovieDetailsResponseDto {
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
  duration: number;

  @Expose()
  description: string;

  @Expose()
  trailerUrl: string;

  @Expose()
  format: Format;

  @Expose()
  ageLimit: AgeLimit;

  @Expose()
  startRentalDate: Date;

  @Expose()
  finalRentalDate: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  status: Status;

  @Expose()
  @Type(() => CommentResponseDto)
  comments: CommentResponseDto[];
}
