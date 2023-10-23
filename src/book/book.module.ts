// Shared Modules
// In order to share share an instance of a module between different other modules, we need to add it ot the exports array.
// For example if we want to share an instance of the BookService, between several other modules, we need to export the BookService provider to the module's exports array.

// Now any module that imports the BookModule has access to the BookService and will share the same instance with all other modules that import it as well.

import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {
  // module dependency injection
  constructor(private bookService: BookService) {}
}
