import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.css']
})
export class LectureNotesComponent {
  title=["Geometry & Continuum Mechanics","Continuum Mechanics on Manifolds","Geometria della Deformazione","Teoria delle Strutture"];
  content=[""];
  gridColumns = 3;
}
