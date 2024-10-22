import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrimMergeComponent } from './trim-merge/trim-merge.component';
import { WaveTrimComponent } from './wave-trim/wave-trim.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    TrimMergeComponent,
    WaveTrimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
