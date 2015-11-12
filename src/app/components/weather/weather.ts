import {Component, NgIf} from 'angular2/angular2';
import {WeatherService} from 'app/services/weather';

@Component({
  selector: 'weather',
  templateUrl: 'app/components/weather/weather.html',
  styleUrls: ['app/components/weather/weather.css'],
  directives: [NgIf]
})
export class WeatherComponent {
  weather: Object;
  
  constructor(weatherService: WeatherService) {
    console.log('constructor: WeatherComponent');
    weatherService
      .getWeatherForCork()
      .subscribe(data => this.weather = data);
  }
}