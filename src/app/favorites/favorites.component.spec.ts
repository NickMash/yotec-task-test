import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YoutubeSearchService } from '../services/youtube-search.service';
import { Observable } from 'rxjs';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let youtubeSearchService: YoutubeSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    youtubeSearchService = fixture.debugElement.injector.get(YoutubeSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clean favorites videos', () => {
    component.clearMemory();
    expect(youtubeSearchService.favorites).toEqual([]);
    expect(Boolean(localStorage.getItem('favorites'))).toEqual(false);
  });
});
