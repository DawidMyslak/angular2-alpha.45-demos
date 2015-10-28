import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

var TODOS: string[] = [
  "Clean house",
  "Walk dog",
  "Eat dinner"
];

@Component({
  selector: 'todo',
  templateUrl: 'app/components/todo/todo.html',
  styleUrls: ['app/components/todo/todo.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TodoComponent {
  todos = TODOS;

  constructor() {
    console.log('constructor: TodoComponent');
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  doneTyping($event: any) {
    if ($event.which === 13) {
      this.addTodo($event.target.value);
    }
  }
}