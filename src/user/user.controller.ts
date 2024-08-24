import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
  findAll() {
    return this.userService.getAll()
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  find(@Param('id') id: string, @Req() req) {
    const userId = req.user.userId
    if (+id !== userId) throw new ForbiddenException()

    return this.userService.getById(userId)
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    console.log('CREATE')
    return this.userService.create(createUserDto)
  }

  @Put(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  delete(@Param('id') id: string) {
    return this.userService.delete(+id)
  }

}
