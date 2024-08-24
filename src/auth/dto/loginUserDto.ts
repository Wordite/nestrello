import { IsEmail, IsNotEmpty, Max } from "class-validator";

export class LoginUserDto {

    @IsEmail()
    @Max(100)
    email: string;

    @Max(255)
    @IsNotEmpty()
    password: string;
}

