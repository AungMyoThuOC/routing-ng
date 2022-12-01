import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotstrpComponent } from './botstrp.component';

describe('BotstrpComponent', () => {
  let component: BotstrpComponent;
  let fixture: ComponentFixture<BotstrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotstrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotstrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
