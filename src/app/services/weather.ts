import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class WeatherService {
  http: Http;

  constructor(http: Http) {
    console.log('constructor: WeatherService');
    this.http = http;
  }

  getWeatherForCork(callback) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Cork,ie&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f')
      .map(res => res.json())
      .subscribe(
        data => callback(data),
        err => console.log(err)
      );
  }
}