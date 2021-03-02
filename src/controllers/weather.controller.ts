import { Controller, Get, NotFoundException } from '@nestjs/common';
import { WeatherService } from '../services/weather.service';
import { average } from '../helpers/helpers';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/average-seven-days')
  async getSevenDays(): Promise<number> {
    const weather = await this.weatherService.getSevenDays();

    if (weather.length === 0) {
      throw new NotFoundException('Empty');
    }

    const temperatures = weather.map(w => w.temperature);

    return average(temperatures);
  }
}
