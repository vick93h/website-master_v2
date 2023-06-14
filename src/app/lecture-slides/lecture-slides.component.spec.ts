import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureSlidesComponent } from './lecture-slides.component';

describe('LectureSlidesComponent', () => {
  let component: LectureSlidesComponent;
  let fixture: ComponentFixture<LectureSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
