import { TestBed } from '@angular/core/testing';
import { TableRendererService } from './table-renderer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableRendererService', () => {
  let service: TableRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ],
    }).compileComponents();
    service = TestBed.inject(TableRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create the field in localStorage', () => {
    service.addToFavoritesToLocalStorage();
    expect(Boolean(localStorage.getItem('favorites'))).toEqual(true);
  });
});
