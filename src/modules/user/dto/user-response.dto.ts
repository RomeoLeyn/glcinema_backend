import { Expose } from 'class-transformer';
import { Role } from 'src/common/enums/user-role.emuns';

export class UserResponseDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  role: Role;
}
