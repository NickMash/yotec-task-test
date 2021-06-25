import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsImageComponent } from './thumbnails-image.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ThumbnailsImageComponent', () => {
  let component: ThumbnailsImageComponent;
  let fixture: ComponentFixture<ThumbnailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailsImageComponent ],
      imports: [ HttpClientTestingModule ],
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
