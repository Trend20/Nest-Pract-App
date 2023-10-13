import { Controller, Delete, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  // get all books
  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  // get book by id
  @Get(':id')
  getBookById(id: string) {
    return this.bookService.getBookById(id);
  }

  // delete book using ID
  @Delete(':id')
  deleteBook(id: string) {
    return this.bookService.deleteBook(id);
  }
}
