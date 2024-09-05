import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";


export class UpdateCommentDto {
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    cardId: number;
}
