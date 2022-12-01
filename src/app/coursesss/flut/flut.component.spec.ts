import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutComponent } from './flut.component';

describe('FlutComponent', () => {
  let component: FlutComponent;
  let fixture: ComponentFixture<FlutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
