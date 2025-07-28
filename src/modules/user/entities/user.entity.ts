import { Role } from 'src/common/enums/user-role.emuns';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
