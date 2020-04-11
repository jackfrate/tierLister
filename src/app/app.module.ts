// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// firebase stuff
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire"

@NgModule({
  declarations: [
    AppComponent
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
