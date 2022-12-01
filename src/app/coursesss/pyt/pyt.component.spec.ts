import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PytComponent } from './pyt.component';

describe('PytComponent', () => {
  let component: PytComponent;
  let fixture: ComponentFixture<PytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PytComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
