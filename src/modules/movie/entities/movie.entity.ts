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
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { Actor } from 'src/modules/actor/entities/actor.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, name: 'title_ukr' })
  titleUkr: string;

  @Column({ type: 'varchar', length: 128, name: 'title_original' })
  titleOriginal: string;

  @Column({ type: 'text', name: 'poster_url' })
  posterUrl: string;

  @Column({
    type: 'int',
    unsigned: true,
  })
  year: number;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  @JoinTable({
    name: 'movie_genre',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'genre_id', referencedColumnName: 'id' },
  })
  genres: Genre[];

  @Column({ name: 'dub_language' })
  dubLanguage: string;

  @ManyToOne(() => Country, (country) => country.movies)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column({
    type: 'int',
  })
  duration: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({ name: 'trailer_url' })
  trailerUrl: string;

  @Column({ type: 'enum', enum: Format })
  format: Format;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({ type: 'enum', enum: AgeLimit, name: 'age_limit' })
  ageLimit: AgeLimit;

  @Column({ type: 'date', name: 'start_rental_date' })
  startRentalDate: Date;

  @Column({ type: 'date', name: 'final_rental_date' })
  finalRentalDate: Date;

  @ManyToMany(() => Actor, (actor) => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: Actor[];

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

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];
}
