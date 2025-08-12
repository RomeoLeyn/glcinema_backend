import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { CountryModule } from './modules/country/country.module';
import { GenreModule } from './modules/genre/genre.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommentModule } from './modules/comment/comment.module';
import { ImportExternalMoviesModule } from './import-external-movies/import-external-movies.module';
import { getDbConfig } from './common/config/database/db.config';
import { ActorModule } from './modules/actor/actor.module';
import { RequestLoggerMiddleware } from './common/middlewares/request-logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      useFactory: getDbConfig,
      inject: [ConfigService],
    }),
    MovieModule,
    GenreModule,
    CountryModule,
    UserModule,
    CommentModule,
    ImportExternalMoviesModule,
    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
