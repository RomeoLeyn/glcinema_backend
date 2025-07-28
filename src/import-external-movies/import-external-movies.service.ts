import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { ResponseImportExternalMoviesDto } from './dto/response-import-external-movies.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class ImportExternalMoviesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async findAll() {}

  async findByName(
    name: string,
    page: number,
  ): Promise<ResponseImportExternalMoviesDto> {
    const res: AxiosResponse<ResponseImportExternalMoviesDto> =
      await firstValueFrom(
        this.httpService.get(
          `/search/movie?api_key=${this.configService.get<string>('API_KEY')}&query=${name}&page=${page}`,
        ),
      );
    return res.data;
  }

  async findOne(id: number) {
    const res = await firstValueFrom(
      this.httpService.get(
        `/movie/${id}?api_key=${this.configService.get<string>('API_KEY')}`,
      ),
    );
    return res.data;
  }
}
