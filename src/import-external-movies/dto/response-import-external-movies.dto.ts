import { ResponseImportExternalMovieDto } from './response-import-external-movie.dto';

export class ResponseImportExternalMoviesDto {
  page: number;
  results: ResponseImportExternalMovieDto[];
  total_pages: number;
  total_results: number;
}
