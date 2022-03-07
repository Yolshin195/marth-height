import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdMessageComponent } from './setd-message.component';

describe('SetdMessageComponent', () => {
  let component: SetdMessageComponent;
  let fixture: ComponentFixture<SetdMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetdMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetdMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
