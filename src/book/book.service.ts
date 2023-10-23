// PROVIDERS OR SERVICES(repositories, helpers, factories);
// The main idea of providers is that it can be injected as a dependency.
// Controllers should handle HTTP requests and delegate more complex tasks to providers.
// Providers are just plain javascript classes that are declared as providers in a module.

import { Injectable } from '@nestjs/common';
import { Book } from 'src/types/book.model';

@Injectable()
export class BookService {
  books: Book[] = [];

  // get all books
  getAllBooks() {
    return this.books;
  }

  // get book by id
  getBookById(id: string): Book {
    return this.books.find((book) => book.id === id);
  }

  // create book
  // createBook(book: Book): Book {

  // }

  // update book

  // delete book
  deleteBook(id: string) {
    return this.books.filter((book) => book.id !== id);
  }
}
