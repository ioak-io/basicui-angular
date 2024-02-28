import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import  ThemeType  from '../types/ThemeType';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
    });

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
  });

  it('should create the checkbox component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the checkbox with the provided label and default theme', () => {
    const label = 'Lorem ipsum Dolor sit';
    component.label = label;

    fixture.detectChanges();

    const checkboxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');

    expect(checkboxElement).toBeTruthy();
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toContain(label);
    expect(labelElement.classList.contains('basicui-checkbox--theme-default')).toBe(true);
  });

  it('should render the checkbox with the provided label and primary theme', () => {
    const label = 'Lorem ipsum Dolor sit';
    const theme = ThemeType.primary;
    component.label = label;
    component.theme = theme;

    fixture.detectChanges();

    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');

    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toContain(label);
    expect(labelElement.classList.contains('basicui-checkbox--theme-primary')).toBe(true);
  });
});
