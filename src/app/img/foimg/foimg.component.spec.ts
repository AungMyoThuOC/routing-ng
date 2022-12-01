import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoimgComponent } from './foimg.component';

describe('FoimgComponent', () => {
  let component: FoimgComponent;
  let fixture: ComponentFixture<FoimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
