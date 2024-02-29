import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyComponent } from './typography.component';

describe('TypographyComponent', () => {
  let component: TypographyComponent;
  let fixture: ComponentFixture<TypographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyComponent],
    });

    fixture = TestBed.createComponent(TypographyComponent);
    component = fixture.componentInstance;
  });

  it('should create the TypographyComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display headings', () => {
    fixture.detectChanges();

    const headings = fixture.nativeElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBe(6);
  });
});
