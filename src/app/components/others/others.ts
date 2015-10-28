import {Component} from 'angular2/angular2';
import {Zippy} from 'app/components/others/zippy';

@Component({
  selector: 'others',
  templateUrl: 'app/components/others/others.html',
  styleUrls: ['app/components/others/others.css'],
  directives: [Zippy]
})
export class OthersComponent {
  constructor() {
    console.log('constructor: OthersComponent');
  }
}