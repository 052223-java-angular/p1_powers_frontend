import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailinfoComponent } from './trailinfo.component';

describe('TrailinfoComponent', () => {
  let component: TrailinfoComponent;
  let fixture: ComponentFixture<TrailinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailinfoComponent]
    });
    fixture = TestBed.createComponent(TrailinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
