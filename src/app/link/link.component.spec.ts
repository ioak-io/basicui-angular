import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LinkComponent } from './link.component';
import ThemeType from '../types/ThemeType';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the link component', () => {
    expect(component).toBeTruthy();
  });

  it('should render with provided label text and theme', () => {
    component.label = 'Lorem ipsum';
    component.theme = ThemeType.primary;
    fixture.detectChanges();

    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement).toBeTruthy();
    expect(linkElement.textContent).toContain('Lorem ipsum');
    expect(linkElement.classList.contains('primary')).toBe(true);
  });
});