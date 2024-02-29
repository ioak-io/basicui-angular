import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IconButtonComponent } from './icon-button.component';
import ThemeType from '../types/ThemeType';
import ButtonVariantType from '../types/ButtonVariantType';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the icon button component', () => {
    expect(component).toBeTruthy();
  });

  it('should render with provided theme, variant, and circle properties', () => {
    component.theme = ThemeType.primary;
    component.variant = ButtonVariantType.default;
    component.circle = false;
    fixture.detectChanges();

    const iconButtonElement = fixture.nativeElement.querySelector('button');
    expect(iconButtonElement).toBeTruthy();
    expect(iconButtonElement.classList.contains('primary')).toBe(true);
    expect(iconButtonElement.classList.contains('default')).toBe(true);
  });
});