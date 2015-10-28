import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

var HEROES: Hero[] = [
  { "id": 4, "name": "Mr. Nice" },
  { "id": 1, "name": "Narco" },
  { "id": 25, "name": "Bombasto" },
  { "id": 89, "name": "Celeritas" },
  { "id": 12, "name": "Magneta" },
  { "id": 2, "name": "RubberMan" },
  { "id": 23, "name": "Dynama" },
  { "id": 40, "name": "Dr IQ" },
  { "id": 9, "name": "Magma" },
  { "id": 11, "name": "Tornado" }
];

class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'heroes',
  templateUrl: 'app/components/heroes/heroes.html',
  styleUrls: ['app/components/heroes/heroes.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroesComponent {
  selectedHero: Hero;
  heroes = HEROES;
  
  constructor() {
    console.log('constructor: HeroesComponent');
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getSelectedClass(hero: Hero) {
    return { 'active': hero === this.selectedHero };
  }
}