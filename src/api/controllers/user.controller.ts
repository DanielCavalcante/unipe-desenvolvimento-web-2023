import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('v1/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAll() {
    try {
      return await this.service.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
