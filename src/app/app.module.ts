// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// firebase stuff
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { BoardComponent } from './tier-list/board/board.component';
import { ListItemComponent } from './tier-list/list-item/list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListItemComponent
  ],
  imports: [
    // default angualr
    BrowserModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
