import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import {FormsModule} from '@angular/forms';
import { ListtodoComponent } from './listtodo/listtodo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddToDoComponent,
    ListtodoComponent,
    TodoItemComponent,
    CvComponent,
    DetailsCvComponent,
    ListCvComponent,
    EmbaucheComponent,
    ItemCvComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
