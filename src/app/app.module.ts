// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


import { BoardComponent } from './tier-list/board/board.component';
import { ListItemComponent } from './tier-list/list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListItemComponent
  ],
  imports: [
    // default angualr
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
