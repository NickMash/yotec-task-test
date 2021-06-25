import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLineComponent } from './search-line.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchLineComponent', () => {
  let component: SearchLineComponent;
  let fixture: ComponentFixture<SearchLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLineComponent, ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
