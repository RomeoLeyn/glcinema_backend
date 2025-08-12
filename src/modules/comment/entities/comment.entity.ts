import { CommentStatus } from 'src/common/enums/comment-status.enum';
import { Movie } from 'src/modules/movie/entities/movie.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @Column({ type: 'varchar' })
  content: string;

  @Column({ unsigned: true, default: 0 })
  likes: number;

  @Column({ unsigned: true, default: 0 })
  dislikes: number;

  @Column({ name: 'status', default: CommentStatus.UNDVERIFIED })
  status: CommentStatus;

  @CreateDateColumn({ name: 'written_at' })
  writtenAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
