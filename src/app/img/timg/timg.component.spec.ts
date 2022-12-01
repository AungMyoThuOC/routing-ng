import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimgComponent } from './timg.component';

describe('TimgComponent', () => {
  let component: TimgComponent;
  let fixture: ComponentFixture<TimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
