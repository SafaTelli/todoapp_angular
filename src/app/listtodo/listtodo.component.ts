import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {

  @Input()todos: Todo[] ;
  constructor(private todoService: TodoService) {

    this.todos = todoService.getTodoList() ;
  }



  ngOnInit(): void {
  }

}
