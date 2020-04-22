// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// my stuff
import { AppComponent } from './app.component';
import { BoardComponent } from './tier-list/board/board.component';
import { ListItemComponent } from './tier-list/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { NewItemDialogComponent } from './tier-list/new-item-dialog/new-item-dialog.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListItemComponent,
    NewItemDialogComponent
  ],
  imports: [
    // default angualr
    FormsModule,
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    NewItemDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
