import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scienze-delle-costruzioni',
  templateUrl: './scienze-delle-costruzioni.component.html',
  styleUrls: ['./scienze-delle-costruzioni.component.css']
})
export class ScienzeDelleCostruzioniComponent {
  filename:any;
  constructor(private http: HttpClient) {

  }
  downloadPDF(url: string) {
    this.filename = url.substring(url.lastIndexOf('/') + 1);
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
