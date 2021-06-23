import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsImageComponent } from './thumbnails-image.component';

describe('ThumbnailsImageComponent', () => {
  let component: ThumbnailsImageComponent;
  let fixture: ComponentFixture<ThumbnailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
