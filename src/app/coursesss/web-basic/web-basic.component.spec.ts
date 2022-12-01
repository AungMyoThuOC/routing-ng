import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBasicComponent } from './web-basic.component';

describe('WebBasicComponent', () => {
  let component: WebBasicComponent;
  let fixture: ComponentFixture<WebBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
