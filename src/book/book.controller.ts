// controllers are responsible for handling incoming requests and returning responses to the client.
// It's main purpose is to receive specific requests for the application.
// The routing mechanism controls which controller receives the requests and a controller can have more than one route.

// REQUEST OBJECT
// Handlers always needs access to the client request body and Nest provides access to the request object of the underlying platform.
// We can access the request object by instructing Nest to inject it by adding the @Req() decorator to the handler's signature.

// STATUS CODE
// As mentioned, the response status code is always 200 by default, except for POST request which is always 201.
// We can always change this behavior by adding the @HttpCode(...) decorator at a handler level.

// HEADERS
// To specify a custom response header, you can either use @Header() decorator or a library-specific response object.

// REDIRECTION
// To redirect a response to a specific url, you can either use a @Redirect() decorator or a library specific response object.
// @Redirect() takes in two arguments (url) and (statusCode) and both are optional.

// Request Payloads
// If you use typescript, we have to define a DTO schema. Data Transfer Object is an object that defines how data is sent over the network.
// We could define the DTO using either interface or class but using classes is recommended.

import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { BookService } from './book.service';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat-dto';
// import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  // get all books
  @Get()
  getAllBooks(@Req() _request: Request): any {
    return this.bookService.getAllBooks();
    console.log(_request);
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

  @Post()
  async createBook(@Body() createCatDto: CreateCatDto) {
    return 'This is a newly created cat';
    console.log(createCatDto.name);
  }
}
