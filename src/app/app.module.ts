import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import {FormsModule} from '@angular/forms';
import { ListtodoComponent } from './listtodo/listtodo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddToDoComponent,
    ListtodoComponent,
    TodoItemComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
