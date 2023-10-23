import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Redirect,
  Req,
} from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update.cat.dto';

@Controller('cat')
export class CatController {
  // update cat
  @Put(':id')
  updateCat(@Body() updateCatDto: UpdateCatDto) {
    return 'This Cat details are updated.';
    console.log(updateCatDto.breed);
  }

  // Request object
  @Get()
  findAll(@Req() request: Request) {
    return 'This are the cats found';
    console.log(request);
  }

  // status code
  @Post()
  @HttpCode(401)
  addCat() {
    return 'This is the added cat';
  }

  // Headers
  @Post()
  @Header('Cache Control', 'none')
  postCat() {
    return 'A Brown cat has been added';
  }

  // Redirection
  @Get()
  @Redirect('/', 201)
  getAllLazyCats() {
    return 'This is the list of all lazy cats';
  }

  // async
  // every async request must return a promise
  @Get()
  async getAllYellowCats(): Promise<any[]> {
    return [];
  }

  // delete request
  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    return `This is the deleted cat id: ${id}`;
  }
}
