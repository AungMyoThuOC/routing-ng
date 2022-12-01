import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeComponent } from './backe.component';

describe('BackeComponent', () => {
  let component: BackeComponent;
  let fixture: ComponentFixture<BackeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
