import { Controller, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('/login')
  login() {
    const payload = { username: 'Bill', id: 2 };
    return {
      acessToken: this.jwtService.sign(payload),
    };
  }
}
