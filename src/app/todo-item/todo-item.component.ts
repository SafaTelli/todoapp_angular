import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo ;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteToDo(todo: Todo)
  {
    this.todoService.deleteTodo(todo);
  }

}
