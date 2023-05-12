import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDTO } from '../dtos/user.dto';

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

  @Post()
  async create(@Body() userDto: UserDTO) {
    try {
      const user = await this.service.create(userDto);
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
