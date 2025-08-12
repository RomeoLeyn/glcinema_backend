import { Country } from 'src/modules/country/entities/country.entity';
import { Movie } from 'src/modules/movie/entities/movie.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'first_name', length: 64 })
  firstName: string;

  @Column({ type: 'varchar', name: 'middle_name', length: 64 })
  middleName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 64 })
  lastName: string;

  @ManyToOne(() => Country, (country) => country.actors)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @ManyToMany(() => Movie, (movie) => movie.actors)
  movies: Movie[];
}
