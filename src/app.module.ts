import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';

@Module({
  imports: [UserModule, AuthModule, BookModule, OrderModule],
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule {}
