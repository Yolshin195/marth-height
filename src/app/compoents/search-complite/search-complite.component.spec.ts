import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompliteComponent } from './search-complite.component';

describe('SearchCompliteComponent', () => {
  let component: SearchCompliteComponent;
  let fixture: ComponentFixture<SearchCompliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCompliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
