// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// my stuff
import { AppComponent } from './app.component';
import { BoardComponent } from './tier-list/board/board.component';
import { ListItemComponent } from './tier-list/list-item/list-item.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
