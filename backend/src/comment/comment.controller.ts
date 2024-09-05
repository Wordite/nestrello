import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createCommentDto';
import { PositiveNumberValidationPipe } from 'src/app/validation/positiveNumber.validation';
import { UpdateCommentDto } from './dto/updateCommentDto';

@Controller('users/:userId/columns/:columnId/cards/:cardId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    console.log(createCommentDto)
    return this.commentService.create(createCommentDto)
  }

  @Put(':id')
  update(@Param('id', PositiveNumberValidationPipe) id: number, @Body() updateCommentDto: UpdateCommentDto) {
    this.commentService.update(id, updateCommentDto)
  }
}
