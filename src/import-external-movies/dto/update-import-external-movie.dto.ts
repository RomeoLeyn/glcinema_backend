import { PartialType } from '@nestjs/mapped-types';
import { CreateImportExternalMovieDto } from './create-import-external-movie.dto';

export class UpdateImportExternalMovieDto extends PartialType(
  CreateImportExternalMovieDto,
) {}
