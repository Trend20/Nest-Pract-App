import { Injectable } from '@nestjs/common';
import { Cat } from 'src/types/cat.model';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  // cats operations
  createCat(cat: Cat) {
    return this.cats.push(cat);
  }

  // get cats

  // get a single cat

  // update cat

  // delete cat
}
