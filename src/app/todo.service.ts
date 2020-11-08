import { Injectable } from '@angular/core';
import {Todo} from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // tslint:disable-next-line:variable-name
  private _todolist: Todo[] ;
  constructor() {
    this._todolist = [new Todo('TP ANGULAR', 'DO TP ANGULAR'),
      new Todo('TP ANGULAR', 'DO TP ANGULAR'),
      new Todo('TP ANGULAR', 'DO TP ANGULAR')
    ];

  }


  getTodoList(): Todo[]
  {
    return  this._todolist ;
  }

  // tslint:disable-next-line:typedef
  addToDo(todo: Todo)
  {
    this._todolist.push(todo);
  }
  // tslint:disable-next-line:typedef
  deleteTodo(todo: Todo)
  {
    const index: number = this._todolist.indexOf(todo);
    this._todolist.splice(index, 1);
  }

}
