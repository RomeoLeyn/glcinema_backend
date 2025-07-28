import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { DeepPartial, Repository } from 'typeorm';
import { MoviesResponseDto } from './dto/movies-respone.dto';
import { createMovieFromDto } from './movie.factory';
import { MovieDetailsResponseDto } from './dto/movie-details-response.dto';
import { plainToInstance } from 'class-transformer';
import { GenreService } from '../genre/genre.service';
import { CountryService } from '../country/country.service';
import { Status } from 'src/common/enums/status.enum';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private readonly genreService: GenreService,
    private readonly countryService: CountryService,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = this.movieRepository.create(
      createMovieFromDto(createMovieDto),
    );
    const movieCreated = await this.saveMovie(movie);
    return await this.findOne(movieCreated.id);
  }

  async saveMovie(movie: DeepPartial<Movie>) {
    return await this.movieRepository.save(movie);
  }

  async findAll(): Promise<MoviesResponseDto[]> {
    const movies = await this.movieRepository.find({
      relations: {
        genres: true,
        country: true,
      },
    });

    return plainToInstance(MoviesResponseDto, movies);
  }

  async findOne(id: number): Promise<MovieDetailsResponseDto> {
    const movie = await this.movieRepository.findOne({
      where: { id: id },
      relations: { genres: true, country: true, comments: { user: true } },
    });

    if (!movie) {
      throw new NotFoundException('movie not found');
    }

    return plainToInstance(MovieDetailsResponseDto, movie, {
      excludeExtraneousValues: true,
    });
  }

  async findEntity(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({
      where: { id: id },
      relations: { genres: true, country: true },
    });

    if (!movie) {
      throw new NotFoundException('movie not found');
    }
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    if (!id) {
      throw new BadRequestException();
    }

    const movie = await this.findOne(id);

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    if (updateMovieDto.genres) {
      movie.genres = await this.genreService.findByIds(updateMovieDto.genres);
    }

    if (updateMovieDto.countryId) {
      const countryExisitng = await this.countryService.findOne(
        updateMovieDto.countryId,
      );
      console.log(countryExisitng);
      if (!countryExisitng) {
        throw new NotFoundException();
      }
      movie.country = countryExisitng;
    }

    const { genres, countryId, ...rest } = updateMovieDto;

    Object.assign(movie, rest);

    return await this.movieRepository.save(movie);
  }

  async remove(id: number) {
    const movie = await this.findOne(id);

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    movie.status = Status.DELETED;
    await this.movieRepository.save(movie);
    return await this.movieRepository.softDelete(id);
  }
}
