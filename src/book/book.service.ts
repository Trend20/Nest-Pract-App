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
}
