import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionformComponent } from './suggestionform.component';

describe('SuggestionformComponent', () => {
  let component: SuggestionformComponent;
  let fixture: ComponentFixture<SuggestionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
