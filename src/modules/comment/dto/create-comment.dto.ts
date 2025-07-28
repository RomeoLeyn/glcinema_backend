import { IsInt, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  userId: number;

  @IsInt()
  movieId: number;

  @IsString()
  content: string;
}
