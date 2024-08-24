import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';


@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get()
  findAll() {
    return this.userService.getAll()
  }

  @Get(':id')
  find(@Param('id') id: string, @Req() req) {
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'user crated'
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {}

  @Delete(':id')
  delete(@Param('id') id: string) {}

}
