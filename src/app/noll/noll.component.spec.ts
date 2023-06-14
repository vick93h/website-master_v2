import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NollComponent } from './noll.component';

describe('NollComponent', () => {
  let component: NollComponent;
  let fixture: ComponentFixture<NollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
