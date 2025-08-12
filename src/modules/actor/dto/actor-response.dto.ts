import { Expose, Type } from 'class-transformer';
import { CountryResponseDto } from 'src/modules/country/dto/country-response.dto';

export class ActorResponseDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  middleName: string;

  @Expose()
  lastName: string;

  @Expose()
  @Type(() => CountryResponseDto)
  country: CountryResponseDto;
}
