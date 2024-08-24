import { IsNotEmpty, Max } from "class-validator";


export class UpdateUserDto {
    @IsNotEmpty()
    @Max(255)
    password: string;
}
