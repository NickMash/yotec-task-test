import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResultsComponent } from './all-results.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllResultsComponent', () => {
  let component: AllResultsComponent;
  let fixture: ComponentFixture<AllResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResultsComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
