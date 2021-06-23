import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSelectionButtonComponent } from './favorites-selection-button.component';

describe('FavoritesSelectionButtonComponent', () => {
  let component: FavoritesSelectionButtonComponent;
  let fixture: ComponentFixture<FavoritesSelectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesSelectionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesSelectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
