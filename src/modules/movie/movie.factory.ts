import { CreateMovieDto } from './dto/create-movie.dto';

export function createMovieFromDto(createMovieDto: CreateMovieDto) {
  return {
    titleUkr: createMovieDto.titleUkr,
    titleOriginal: createMovieDto.titleOriginal,
    posterUrl: createMovieDto.posterUrl,
    year: createMovieDto.year,
    genres: createMovieDto.genres.map((id) => ({
      id,
    })),
    dubLanguage: createMovieDto.dubLanguage,
    country: { id: createMovieDto.countryId },
    duration: createMovieDto.duration,
    description: createMovieDto.description,
    trailerUrl: createMovieDto.trailerUrl,
    format: createMovieDto.format,
    ageLimit: createMovieDto.ageLimit,
    startRentalDate: createMovieDto.startRentalDate,
    finalRentalDate: createMovieDto.finalRentalDate,
  };
}
