import { Body, ConflictException, Controller, Delete, ForbiddenException, Get, Headers, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Serialize } from 'src/app/decorators/serialize.decorator';
import { UserResponseDto } from './dto/userResponseDto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
  @Serialize(UserResponseDto)
  findAll() {
    return this.userService.getAll()
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @Serialize(UserResponseDto)
  find(@Param('id') id: string, @Req() req, @Headers('Authorization') token: string) {
    const userId = req.user.userId
    if (+id !== userId) throw new ForbiddenException()

    return this.userService.getById(userId)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)

    const isExist = !!(await this.userService.getByEmail(createUserDto.email))
    if (isExist) throw new ConflictException('User already exist')

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
