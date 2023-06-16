import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LogInComponent} from "./log-in/log-in.component";
import {LectureNotesComponent} from "./lecture-notes/lecture-notes.component";
import { ScienzeDelleCostruzioniComponent } from './scienze-delle-costruzioni/scienze-delle-costruzioni.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { LectureSlidesComponent } from './lecture-slides/lecture-slides.component';
import { NollComponent } from './noll/noll.component';
import { SelectedPublicationsComponent } from './selected-publications/selected-publications.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path:'Home', component: HomeComponent},
  {path:'log-In',component:LogInComponent},
  {path:'lectureNotes',component:LectureNotesComponent},
  { path: 'scienzeDelleCostruzioni', component:ScienzeDelleCostruzioniComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'lectureSlides', component: LectureSlidesComponent },
  { path: 'selectedPubblications', component: SelectedPublicationsComponent },
  { path: 'noll_s', component: NollComponent },
  { path: '**', redirectTo: '/errore', pathMatch: 'full' },
  {path:'errore',component:NotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
