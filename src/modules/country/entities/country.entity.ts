import { Actor } from 'src/modules/actor/entities/actor.entity';
import { Movie } from 'src/modules/movie/entities/movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  code: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'flag_url',
  })
  flagUrl: string;

  @OneToMany(() => Movie, (movie) => movie.country)
  movies: Movie[];

  @OneToMany(() => Actor, (actor) => actor.country)
  actors: Actor[];
}
