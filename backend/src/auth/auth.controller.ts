import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/loginUserDto';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    const payload = { username: 'Bill', id: 2 };
    console.log(loginUserDto)

    return {
      acessToken: this.jwtService.sign(payload),
    };
  }
}
