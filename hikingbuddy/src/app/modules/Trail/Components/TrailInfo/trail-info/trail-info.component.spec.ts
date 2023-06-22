import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailInfoComponent } from './trail-info.component';

describe('TrailInfoComponent', () => {
  let component: TrailInfoComponent;
  let fixture: ComponentFixture<TrailInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailInfoComponent]
    });
    fixture = TestBed.createComponent(TrailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
