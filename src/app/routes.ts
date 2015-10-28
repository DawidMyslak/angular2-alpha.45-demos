import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from 'app/components/home/home';
import {HeroesComponent} from 'app/components/heroes/heroes';
import {TodoComponent} from 'app/components/todo/todo';
import {OthersComponent} from 'app/components/others/others';
import {WeatherComponent} from 'app/components/weather/weather';

const ROUTES = {
  home: {
    path: '/',
    as: 'Home',
    component: HomeComponent
  },
  heroes: {
    path: '/heroes',
    as: 'Heroes',
    component: HeroesComponent
  },
  todo: {
    path: '/todo',
    as: 'Todo',
    component: TodoComponent
  },
  others: {
    path: '/others',
    as: 'Others',
    component: OthersComponent
  },
  weather: {
    path: '/weather',
    as: 'Weather',
    component: WeatherComponent
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(ROUTES).map((name) => ROUTES[name]);