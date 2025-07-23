import { Country } from 'src/modules/country/entities/country.entity';
import { AgeLimit } from 'src/common/enums/age-limit.enum';
import { Format } from 'src/common/enums/format.enum';
import { Status } from 'src/common/enums/status.enum';
import { Genre } from 'src/modules/genre/entities/genre.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title_ukr' })
  titleUkr: string;

  @Column({ name: 'title_original' })
  titleOriginal: string;

  @Column({ name: 'poster_url' })
  posterUrl: string;

  @Column()
  year: number;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  @JoinTable()
  genres: Genre[];

  @Column({ name: 'dub_language' })
  dubLanguage: string;

  @ManyToOne(() => Country, (country) => country.movies)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column()
  duration: number;

  @Column()
  description: string;

  @Column({ name: 'trailer_url' })
  trailerUrl: string;

  @Column({ type: 'enum', enum: Format })
  format: Format;

  @Column({ type: 'enum', enum: AgeLimit, name: 'age_limit' })
  ageLimit: AgeLimit;

  @Column({ type: 'date', name: 'start_rental_date' })
  startRentalDate: Date;

  @Column({ type: 'date', name: 'final_rental_date' })
  finalRentalDate: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ type: 'enum', enum: Status, default: Status.NO_ACTIVE })
  status: Status;
}
