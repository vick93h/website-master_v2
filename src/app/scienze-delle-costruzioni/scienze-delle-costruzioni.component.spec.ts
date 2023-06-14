import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienzeDelleCostruzioniComponent } from './scienze-delle-costruzioni.component';

describe('ScienzeDelleCostruzioniComponent', () => {
  let component: ScienzeDelleCostruzioniComponent;
  let fixture: ComponentFixture<ScienzeDelleCostruzioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienzeDelleCostruzioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienzeDelleCostruzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
