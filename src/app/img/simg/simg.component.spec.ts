import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimgComponent } from './simg.component';

describe('SimgComponent', () => {
  let component: SimgComponent;
  let fixture: ComponentFixture<SimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
