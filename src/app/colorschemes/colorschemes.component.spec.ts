import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSchemesComponent } from './colorschemes.component';

describe('ColorSchemesComponent', () => {
  let component: ColorSchemesComponent;
  let fixture: ComponentFixture<ColorSchemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorSchemesComponent],
    });

    fixture = TestBed.createComponent(ColorSchemesComponent);
    component = fixture.componentInstance;
  });

  it('should create the ColorSchemesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the color schemes when discriminator is not themes-overview', () => {
    component.discriminator = 'adaptive';
    fixture.detectChanges();

    const colorSchemeElement: HTMLElement = fixture.nativeElement.querySelector('.basicuidemo-color-scheme');

    expect(colorSchemeElement).toBeTruthy();
    expect(colorSchemeElement.classList.contains('basicuidemo-color-scheme--adaptive')).toBe(true);
    expect(fixture.nativeElement.querySelector('.basicuidemo-color-scheme__x')).toBeTruthy();
  });

  it('should render the themes overview when discriminator is themes-overview', () => {
    component.discriminator = 'themes-overview';
    fixture.detectChanges();

    const themesOverviewElement: HTMLElement = fixture.nativeElement.querySelector('app-themes-overview');

    expect(themesOverviewElement).toBeTruthy();
  });
});
