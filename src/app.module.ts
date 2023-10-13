import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, AuthModule, BookModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
