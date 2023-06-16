import { HttpClient } from '@angular/common/http';
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
  filename:any;
  constructor(private http: HttpClient) {

  }
  downloadPDF(url: string) {
    this.filename=url.substring(url.lastIndexOf('/') + 1);
    this.http.get(url, { responseType: 'blob' })
      .subscribe((data: Blob) => {
        const downloadUrl = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = this.filename;
        link.click();
      });
  }
}

