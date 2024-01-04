import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberConverterComponent } from './number-converter/number-converter.component';
import { DigitToTextPipe } from './digit-to-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberToWordsPipe } from './number-to-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberConverterComponent,
    DigitToTextPipe,
    NumberToWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
