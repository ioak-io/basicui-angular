import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import ThemeType from '../types/ThemeType';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioComponent],
    });

    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
  });

  it('should create the radio component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the radio with the provided label and default theme', () => {
    const label = 'Lorem ipsum Dolor sit';
    component.label = label;

    fixture.detectChanges();

    const radioElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="radio"]');
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');

    expect(radioElement).toBeTruthy();
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toContain(label);
    expect(labelElement.classList.contains('basicui-radio--theme-default')).toBe(true);
  });

  it('should render the radio with the provided label and primary theme', () => {
    const label = 'Lorem ipsum Dolor sit';
    const theme = ThemeType.primary;
    component.label = label;
    component.theme = theme;

    fixture.detectChanges();

    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');

    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toContain(label);
    expect(labelElement.classList.contains('basicui-radio--theme-primary')).toBe(true);
  });
});
