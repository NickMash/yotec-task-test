import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoListComponent } from './video-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YoutubeSearchService } from '../services/youtube-search.service';
import { Observable } from 'rxjs';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;
  let youtubeSearchService: YoutubeSearchService;
  let spy: jasmine.Spy;
  let paramsOne: any;
  let paramsTwo: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ YoutubeSearchService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    youtubeSearchService = fixture.debugElement.injector.get(YoutubeSearchService);
    spy = spyOn(youtubeSearchService, 'getUrl');
    paramsOne = {
      node: { data: { videoId: 45} },
      column: { id:  'thumbnails'},
    };
    paramsTwo = {
      node: { data: { videoId: 45} },
      column: { id:  'thumbnails'},
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call youtubeSearchService', () => {
    component.getContextMenuItems(paramsOne);
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should return an array on the condition', () => {
    expect(component.getContextMenuItems(paramsOne).length > 0).toBeTruthy();
  });

  it('should return an array on the else', () => {
    expect(component.getContextMenuItems(paramsTwo).length > 0).toBeTruthy();
  });

});
