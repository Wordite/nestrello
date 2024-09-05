import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositiveNumberValidationPipe implements PipeTransform {
  async transform(value: number) {
    if (isNaN(Number(value)) || value <= 0 || value > 999999) {
      throw new BadRequestException('id is positive number');
    }

    return Number(value);
  }
}
