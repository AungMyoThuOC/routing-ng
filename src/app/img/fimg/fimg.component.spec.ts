import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimgComponent } from './fimg.component';

describe('FimgComponent', () => {
  let component: FimgComponent;
  let fixture: ComponentFixture<FimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
