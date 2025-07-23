import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { MIN_YEAR } from 'src/common/constants/constants';
import { AgeLimit } from 'src/common/enums/age-limit.enum';
import { Format } from 'src/common/enums/format.enum';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsOptional()
  @MinLength(3, { message: 'Min 3 symbols' })
  titleUkr: string;

  @IsOptional()
  @MinLength(3, { message: 'Min 3 symbols' })
  titleOriginal: string;

  @IsOptional()
  @IsUrl({ protocols: ['https', 'http'] }, { message: 'Invalid URL' })
  posterUrl: string;

  @IsOptional()
  @IsInt()
  @Min(MIN_YEAR)
  @Max(new Date().getFullYear())
  year: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty({ message: 'At least one genre must be selected' })
  genres: number[];

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Min 2 symbols' })
  dubLanguage: string;

  @IsOptional()
  @IsInt()
  countryId: number;

  @IsOptional()
  @IsInt()
  duration: number;

  @IsOptional()
  @MinLength(30, { message: 'Min length 30 symbols' })
  description: string;

  @IsOptional()
  @IsUrl({ protocols: ['https', 'http'] }, { message: 'Invalid URL' })
  trailerUrl: string;

  @IsOptional()
  @IsEnum(Format, { message: 'Invalid format' })
  format: Format;

  @IsOptional()
  @IsEnum(AgeLimit, { message: 'Invalid age limit' })
  ageLimit: AgeLimit;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'startRentalDate must be a valid date' })
  startRentalDate: Date;

  @IsOptional()
  @IsDate({ message: 'startRentalDate must be a valid date' })
  @Type(() => Date)
  finalRentalDate: Date;
}
