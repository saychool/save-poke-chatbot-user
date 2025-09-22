import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async save(user: CreateUserDto): Promise<User> {
    return await this.prisma.user.upsert({
      where: { name: user.name },
      update: {},
      create: { name: user.name },
    });
  }
}
