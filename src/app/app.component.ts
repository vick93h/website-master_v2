import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
  }
  clickHandler() {
    this.sidenav.close();
  }

}
