import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";


export class CreateCardDto {
    text: string;

    @IsNotEmpty()
    order: number;

    @IsNotEmpty()
    columnId: number;
}
