import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class LoginUserDto {

    @IsEmail()
    @MaxLength(100)
    email: string;

    @MaxLength(255)
    @IsNotEmpty()
    password: string;
}

