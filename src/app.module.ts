// Applying Middleware.
// There is no place for middleware in the @Module decorator. Instead we set them using the configure() method of the module class.
// Modules that include middleware have to implement the NestModule interface.

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { LoggerMiddleWare } from './middleware/logger.middleware';

@Module({
  imports: [UserModule, AuthModule, BookModule, OrderModule],
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('cats');
  }
}
