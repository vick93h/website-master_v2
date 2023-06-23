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
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackOfficeComponent } from './back-office/back-office.component';
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
    NollComponent,
    NotFoundComponent,
    BackOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
