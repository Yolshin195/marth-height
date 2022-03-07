import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveGiftComponent } from './receive-gift.component';

describe('ReceiveGiftComponent', () => {
  let component: ReceiveGiftComponent;
  let fixture: ComponentFixture<ReceiveGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
