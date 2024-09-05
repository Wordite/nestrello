import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/createCardDto';
import { PositiveNumberValidationPipe } from 'src/app/validation/positiveNumber.validation';
import { UpdateCardDto } from './dto/updateCardDto';

@Controller('users/:userId/columns/:columnId/cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto)
  }

  @Put(':id')
  update(@Param('id', PositiveNumberValidationPipe) id: number, @Body() updateCardDto: UpdateCardDto) {
    this.cardService.update(id, updateCardDto)
  }
}
