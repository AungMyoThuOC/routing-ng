import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JssComponent } from './jss.component';

describe('JssComponent', () => {
  let component: JssComponent;
  let fixture: ComponentFixture<JssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
