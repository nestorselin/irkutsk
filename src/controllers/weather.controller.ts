import { Controller, Get } from '@nestjs/common';
import { WeatherService } from '../services/weather.service';
import { average } from '../helpers/helpers';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getSevenDays(): Promise<number> {
    const weather = await this.weatherService.getSevenDays();

    return average(weather);
  }
}
