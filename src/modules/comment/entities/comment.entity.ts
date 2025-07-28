import { CommentStatus } from 'src/common/enums/comment-status.enum';
import { Movie } from 'src/modules/movie/entities/movie.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.comments)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Column({ name: 'content' })
  content: string;

  @Column({ name: 'likes', default: 0 })
  likes: number;

  @Column({ name: 'dislikes', default: 0 })
  dislikes: number;

  @Column({ name: 'status', default: CommentStatus.UNDVERIFIED })
  status: CommentStatus;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'written_at',
  })
  writtenAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;
}
