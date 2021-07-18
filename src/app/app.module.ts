import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Material section
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //routing
    AppRoutingModule,
    BrowserAnimationsModule,
    //material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
