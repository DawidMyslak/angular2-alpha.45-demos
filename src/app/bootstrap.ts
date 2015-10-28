/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/router.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

import {bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {MainComponent} from 'app/components/main/main';
import {WeatherService} from 'app/services/weather';

// bootstrap application
bootstrap(MainComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  WeatherService
]);