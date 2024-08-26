import { Body, Controller, NotFoundException, Post, UnauthorizedException } from '@nestjs/common';
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
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.userService.getByEmail(loginUserDto.email)

    if (!user) throw new NotFoundException('User not found')
    if (user.password !== loginUserDto.password) throw new UnauthorizedException('Incorrect password')

    const payload = { userId: user.id }

    return {
      accessToken: this.jwtService.sign(payload),
      userId: user.id
    };
  }
}
