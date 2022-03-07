import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptSearchGiftComponent } from './script-search-gift.component';

describe('ScriptSearchGiftComponent', () => {
  let component: ScriptSearchGiftComponent;
  let fixture: ComponentFixture<ScriptSearchGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptSearchGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptSearchGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
