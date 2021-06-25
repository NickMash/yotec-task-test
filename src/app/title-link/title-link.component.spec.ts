import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLinkComponent } from './title-link.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TitleLinkComponent', () => {
  let component: TitleLinkComponent;
  let fixture: ComponentFixture<TitleLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLinkComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
