import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '~/auth/current-user.decorator';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  @Get()
  getUserInfo(@CurrentUser() user?: User) {
    return {};
  }
}
