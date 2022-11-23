import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Ai2045Component } from './ai2045/ai2045.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

// Every angular component (@Component) has to be
// associated with an Angular module (@NgModule).
// sieht man unter "declarations":
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Ai2045Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
