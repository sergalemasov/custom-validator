import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomValidatorComponent } from '../custom-validator/custom-validator.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
