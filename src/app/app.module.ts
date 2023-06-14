import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { LectureNotesComponent } from './lecture-notes/lecture-notes.component';
import { SelectedPublicationsComponent } from './selected-publications/selected-publications.component';
import { ScienzeDelleCostruzioniComponent } from './scienze-delle-costruzioni/scienze-delle-costruzioni.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { LectureSlidesComponent } from './lecture-slides/lecture-slides.component';
import { NollComponent } from './noll/noll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    LectureNotesComponent,
    SelectedPublicationsComponent,
    ScienzeDelleCostruzioniComponent,
    ConferencesComponent,
    LectureSlidesComponent,
    NollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
