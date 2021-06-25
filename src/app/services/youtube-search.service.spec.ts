import { fakeAsync, TestBed } from '@angular/core/testing';
import { YoutubeSearchService } from './youtube-search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('YoutubeSearchService', () => {
  let service: YoutubeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ],
    }).compileComponents();
    service = TestBed.inject(YoutubeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get video url', () => {
    expect(service.getUrl(67)).toBe('https://www.youtube.com/watch?v=67');
  });

  it('should get value from observable', fakeAsync((done: DoneFn) => {
    service.getVideos('','','',50).subscribe(result => {
      expect(result.length > 0).toBe(true);
      done();
    });
  }));

  it('should create the field in localStorage', () => {
    service.addToFavoritesToLocalStorage();
    expect(Boolean(localStorage.getItem('favorites'))).toEqual(true);
  });

});
