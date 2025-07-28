import { DeepPartial } from 'typeorm';
import { Movie } from '../movie/entities/movie.entity';
import { User } from '../user/entities/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

export function createCommentFromDto(
  createCommentDto: CreateCommentDto,
  user: User,
  movie: Movie,
): DeepPartial<Comment> {
  return {
    user,
    movie,
    content: createCommentDto.content,
  };
}
