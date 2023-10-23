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
  findAllCats(): Cat[] {
    return this.cats;
  }

  // get a single cat
  findCat(name: string): Cat {
    const cat = this.cats.find((cat) => cat.name === name);
    return cat;
  }

  // update cat
  // updateCat(id: string) {

  // }

  // delete cat
}
