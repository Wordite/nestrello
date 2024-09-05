import { Controller, Get, Param } from '@nestjs/common';
import { ColumnService } from './column.service';
import { PositiveNumberValidationPipe } from 'src/app/validation/positiveNumber.validation';

@Controller('users/:id/columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Get()
  findAll(@Param('id', PositiveNumberValidationPipe) id: number) {
    return this.columnService.getAllUserColumns(id)
  }
}
