import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {APP_ROUTES} from 'app/routes';

@Component({
  selector: 'app',
  templateUrl: 'app/components/main/main.html',
  styleUrls: ['app/components/main/main.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class MainComponent {
  constructor() {
    console.log('constructor: MainComponent');
  }
  
  sayHello() {
    return 'hello';
  }
}