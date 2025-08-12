import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsPositive,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { MIN_YEAR } from 'src/common/constants/constants';
import { AgeLimit } from 'src/common/enums/age-limit.enum';
import { Format } from 'src/common/enums/format.enum';

export class CreateMovieDto {
  @MaxLength(128, { message: 'Max 128 symbols' })
  @MinLength(3, { message: 'Min 3 symbols' })
  titleUkr: string;

  @MaxLength(128, { message: 'Max 128 symbols' })
  @MinLength(3, { message: 'Min 3 symbols' })
  titleOriginal: string;

  @IsUrl({ protocols: ['https', 'http'] }, { message: 'Invalid URL' })
  posterUrl: string;

  @IsInt()
  @Min(MIN_YEAR)
  @Max(new Date().getFullYear())
  year: number;

  @IsArray()
  @ArrayNotEmpty({ message: 'At least one genre must be selected' })
  genres: number[];

  @IsString()
  @MinLength(2, { message: 'Min 2 symbols' })
  dubLanguage: string;

  @IsInt()
  @IsPositive()
  countryId: number;

  @IsInt()
  @IsPositive()
  duration: number;

  @MinLength(30, { message: 'Min length 30 symbols' })
  description: string;

  @IsUrl({ protocols: ['https', 'http'] }, { message: 'Invalid URL' })
  trailerUrl: string;

  @IsEnum(Format, { message: 'Invalid format' })
  format: Format;

  @IsEnum(AgeLimit, { message: 'Invalid age limit' })
  ageLimit: AgeLimit;

  @Type(() => Date)
  @IsDate({ message: 'startRentalDate must be a valid date' })
  startRentalDate: Date;

  @IsDate({ message: 'startRentalDate must be a valid date' })
  @Type(() => Date)
  finalRentalDate: Date;

  @IsArray()
  @ArrayNotEmpty({ message: 'At least one actors must be selected' })
  actors: number[];
}
