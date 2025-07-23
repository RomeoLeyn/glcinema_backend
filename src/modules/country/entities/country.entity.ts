import { Movie } from 'src/modules/movie/entities/movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  flagUrl: string;

  @OneToMany(() => Movie, (movie) => movie.country)
  movies: Movie[];
}
