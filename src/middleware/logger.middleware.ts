// ### Middleware

// Middleware is a function that is always called before a route handler. Middleware functions have access to REQUEST and RESPONSE objects
// and the NEXT middleware function in the application's request-response cycle.

// The NEXT middleware function is commonly denoted by a variable named NEXT.

// DEPENDENCY INJECTION
// Nest Middleware supports dependency injection.
// Just as with providers and controllers, they are able to inject dependencies that are available within the same module.

import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
