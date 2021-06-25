import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCountComponent } from './total-count.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TotalCountComponent', () => {
  let component: TotalCountComponent;
  let fixture: ComponentFixture<TotalCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCountComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
