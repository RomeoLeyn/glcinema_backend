import { Module } from '@nestjs/common';
import { ImportExternalMoviesService } from './import-external-movies.service';
import { ImportExternalMoviesController } from './import-external-movies.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get<string>('BASE_URL'),
        timeout: configService.get<number>('MOVIE_HTTP_TIMEOUT') || 5000,
        headers: {
          api_key: `${configService.get<string>('API_KEY')}`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ImportExternalMoviesController],
  providers: [ImportExternalMoviesService],
})
export class ImportExternalMoviesModule {}
