import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieService } from '../movie/movie.service';
import { UserService } from '../user/user.service';
import { createCommentFromDto } from './comment.factory';
import { Comment } from './entities/comment.entity';
import { CommentStatus } from 'src/common/enums/comment-status.enum';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly movieService: MovieService,
    private readonly userService: UserService,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const user = await this.userService.findEntity(createCommentDto.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const movie = await this.movieService.findEntity(createCommentDto.movieId);

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    const comment = this.commentRepository.create(
      createCommentFromDto(createCommentDto, user, movie),
    );
    return await this.commentRepository.save(comment);
  }

  findAll() {
    return `This action returns all comment`;
  }

  async findAllCommentsByMovieIdAndStatus(
    movieId: number,
    status: CommentStatus,
  ) {
    return await this.commentRepository.find({
      where: { movie: { id: movieId }, status: status },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
