// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppRoutingModule } from './app-routing.module';

// my stuff
import { AppComponent } from './app.component';
import { BoardComponent } from './tier-list/board/board.component';
import { ListItemComponent } from './tier-list/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { FileUploadDirective } from './tier-list/directives/file-upload.directive'

// my dialogs
import { NewItemDialogComponent } from './tier-list/new-item-dialog/new-item-dialog.component';
import { UploadDialogComponent } from './tier-list/upload-dialog/upload-dialog.component';
import { InfoDialogComponent } from './tier-list/info-dialog/info-dialog.component';
import { BoardSettingsDialogComponent } from './tier-list/board-settings-dialog/board-settings-dialog.component';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DbDialogComponent } from './tier-list/db-dialog/db-dialog.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListItemComponent,
    NewItemDialogComponent,
    BoardSettingsDialogComponent,
    UploadDialogComponent,
    FileUploadDirective,
    InfoDialogComponent,
    DbDialogComponent,
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
    MatDialogModule,
    AppRoutingModule,
    ClipboardModule,
    MatRadioModule,
    MatCardModule,
    MatListModule
  ],
  entryComponents: [
    NewItemDialogComponent,
    BoardSettingsDialogComponent,
    UploadDialogComponent,
    InfoDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
