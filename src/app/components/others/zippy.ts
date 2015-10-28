import {Component} from 'angular2/angular2';

@Component({
  selector: 'zippy',
  inputs: ['title'],
  template: `
  <div class="panel panel-default">
    <div class="panel-heading" role="button" (click)="toggle()">
      {{title}} {{ isVisible ? '&blacktriangledown;' : '&blacktriangleright;' }}
    </div>
    <div class="panel-body" [hidden]="!isVisible">
      <ng-content></ng-content>
    </div>
  </div>
  `
})
export class Zippy {
  isVisible: boolean;

  constructor() {
    console.log('constructor: Zippy');
    this.isVisible = false;
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}