import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LogInComponent} from "./log-in/log-in.component";
import {LectureNotesComponent} from "./lecture-notes/lecture-notes.component";
import { ScienzeDelleCostruzioniComponent } from './scienze-delle-costruzioni/scienze-delle-costruzioni.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { LectureSlidesComponent } from './lecture-slides/lecture-slides.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path:'log-In',component:LogInComponent},
  {path:'lectureNotes',component:LectureNotesComponent},
  { path: 'scienzeDelleCostruzioni', component:ScienzeDelleCostruzioniComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'lectureSlides', component: LectureSlidesComponent },
  {path:'Home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
