import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReceivingGiftDialogComponent } from './error-receiving-gift-dialog.component';

describe('ErrorReceivingGiftDialogComponent', () => {
  let component: ErrorReceivingGiftDialogComponent;
  let fixture: ComponentFixture<ErrorReceivingGiftDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorReceivingGiftDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReceivingGiftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
