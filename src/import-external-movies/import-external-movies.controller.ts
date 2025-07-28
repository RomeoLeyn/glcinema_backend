import { Controller, Get, Param } from '@nestjs/common';
import { ImportExternalMoviesService } from './import-external-movies.service';
import { ResponseImportExternalMoviesDto } from './dto/response-import-external-movies.dto';

@Controller('import-external-movies')
export class ImportExternalMoviesController {
  constructor(
    private readonly importExternalMoviesService: ImportExternalMoviesService,
  ) {}

  @Get()
  findAll() {
    return this.importExternalMoviesService.findAll();
  }

  @Get(':name/:page')
  findByName(
    @Param('name') name: string,
    @Param('page') page: number,
  ): Promise<ResponseImportExternalMoviesDto> {
    return this.importExternalMoviesService.findByName(name, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.importExternalMoviesService.findOne(+id);
  }
}
