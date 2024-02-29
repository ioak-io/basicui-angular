import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemesOverviewComponent } from './themes-overview.component';

describe('ThemesOverviewComponent', () => {
  let component: ThemesOverviewComponent;
  let fixture: ComponentFixture<ThemesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemesOverviewComponent],
    });

    fixture = TestBed.createComponent(ThemesOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create the ThemesOverviewComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the themes overview', () => {
    fixture.detectChanges();

    const themesOverviewElement: HTMLElement = fixture.nativeElement.querySelector('.basicuidemo-color-scheme');

    expect(themesOverviewElement).toBeTruthy();

    const themeXElements: NodeListOf<Element> = themesOverviewElement.querySelectorAll('.basicuidemo-color-scheme__x');
    expect(themeXElements.length).toBe(component.themes.length);

    component.themes.forEach((theme, index) => {
      const themeXElement: Element = themeXElements[index];
      expect(themeXElement.classList.contains(`basicuidemo-themes-overview__${theme}`)).toBe(true);

      const bgColorValue = themeXElement.querySelector('.basicuidemo-color-scheme__x__bg__value')?.textContent;
      const fgColorValue = themeXElement.querySelector('.basicuidemo-color-scheme__x__fg__value')?.textContent;

      expect(bgColorValue).toBe(`var(--theme-${theme}-500)`);
      expect(fgColorValue).toBe(`var(--theme-${theme}-500i)`);
    });
  });
});
