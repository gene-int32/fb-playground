import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FirebaseModule } from './firebase.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, FirebaseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
