import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";


export class CreateCommentDto {
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    cardId: number;
}
