import { Expose, Type } from 'class-transformer';
import { CommentStatus } from 'src/common/enums/comment-status.enum';
import { UserResponseDto } from 'src/modules/user/dto/user-response.dto';

export class CommentResponseDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto;

  @Expose()
  content: string;

  @Expose()
  likes: number;

  @Expose()
  dislikes: number;

  @Expose()
  status: CommentStatus;

  @Expose()
  writtenAt: Date;

  @Expose()
  updatedAt: Date;
}
