import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addTodo(todo: Todo)
  {
    console.log(todo.name + '---' + todo.content);
    this.todoService.addToDo(todo);
  }

}
