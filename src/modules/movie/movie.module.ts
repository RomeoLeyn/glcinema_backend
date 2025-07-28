import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { GenreModule } from 'src/modules/genre/genre.module';
import { CountryModule } from 'src/modules/country/country.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), GenreModule, CountryModule],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
