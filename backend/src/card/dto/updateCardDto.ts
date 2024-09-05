import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";


export class UpdateCardDto {
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    order: number;

    @IsNotEmpty()
    columnId: number
}
