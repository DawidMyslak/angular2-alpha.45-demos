import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_TOKEN = '2de143494c0b295cca9337e1e96b00e0';

@Injectable()
export class WeatherService {
  http: Http;

  constructor(http: Http) {
    console.log('constructor: WeatherService');
    this.http = http;
  }

  getWeatherForCork() {
    return this.http.get(`${BASE_URL}?q=Cork,ie&units=metric&appid=${API_TOKEN}`)
      .map((res: Response) => res.json());
  }
}