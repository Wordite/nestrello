import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";


export class CreateUserDto {
    @IsEmail()
    @MaxLength(100)
    email: string;

    @IsNotEmpty()
    @MaxLength(255)
    password: string;
}
