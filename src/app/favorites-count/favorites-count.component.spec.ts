import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCountComponent } from './favorites-count.component';

describe('FavoritesCountComponent', () => {
  let component: FavoritesCountComponent;
  let fixture: ComponentFixture<FavoritesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
