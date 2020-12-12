import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FirebaseModule } from './firebase.module';

import { AppComponent } from './app.component';
import { SignInComponent, SignOutComponent } from './components';

@NgModule({
  declarations: [AppComponent, SignInComponent, SignOutComponent],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, FirebaseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
