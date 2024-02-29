import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchComponent } from './switch.component';
import ThemeType from '../types/ThemeType';
import { By } from '@angular/platform-browser';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchComponent],
    });

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
  });

  it('should create the SwitchComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the default theme class when theme is default', () => {
    component.theme = ThemeType.default;
    fixture.detectChanges();

    const switchElement = fixture.debugElement.query(By.css('.basicui-switch'));
    expect(switchElement.nativeElement.classList.contains('basicui-switch--theme-default')).toBeTruthy();
  });

  it('should apply the primary theme class when theme is primary', () => {
    component.theme = ThemeType.primary;
    fixture.detectChanges();

    const switchElement = fixture.debugElement.query(By.css('.basicui-switch'));
    expect(switchElement.nativeElement.classList.contains('basicui-switch--theme-primary')).toBeTruthy();
  });
});
