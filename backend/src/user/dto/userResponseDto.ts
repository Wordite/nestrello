import { Exclude, Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  // @Expose()
  // cards: any[]


  @Exclude()
  password: string;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  createdAt: Date;
}