import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('save')
  async save(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.save(user);
  }
}
