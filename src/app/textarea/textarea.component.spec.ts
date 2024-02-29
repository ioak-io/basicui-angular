import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaComponent],
    });
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
  });

  it('should create the TextareaComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the textarea with provided properties', () => {
    const label = 'Lorem ipsum';
    const placeholder = 'Dolor sit';
    const value = 'Initial value';

    component.label = label;
    component.placeholder = placeholder;
    component.value = value;

    fixture.detectChanges();

    const textareaElement: HTMLTextAreaElement = fixture.nativeElement.querySelector('.basicui-input');

    expect(textareaElement).toBeTruthy();
    expect(textareaElement.placeholder).toBe(placeholder);
    expect(textareaElement.value).toBe(value);
  });

  it('should display success message when isSuccess is true', () => {
    component.isSuccess = true;
    component.successMessage = 'Success!';

    fixture.detectChanges();

    const successMessageElement: HTMLDivElement = fixture.nativeElement.querySelector('.success-message');

    expect(successMessageElement).toBeTruthy();
    expect(successMessageElement.textContent).toContain('Success!');
  });

  it('should display warning message when isWarning is true', () => {
    component.isWarning = true;
    component.warningMessage = 'Warning!';

    fixture.detectChanges();

    const warningMessageElement: HTMLDivElement = fixture.nativeElement.querySelector('.warning-message');

    expect(warningMessageElement).toBeTruthy();
    expect(warningMessageElement.textContent).toContain('Warning!');
  });

  it('should display tooltip message when isTooltip is true', () => {
    component.isTooltip = true;
    component.tooltipMessage = 'Tooltip!';

    fixture.detectChanges();

    const tooltipMessageElement: HTMLDivElement = fixture.nativeElement.querySelector('.tooltip-message');

    expect(tooltipMessageElement).toBeTruthy();
    expect(tooltipMessageElement.textContent).toContain('Tooltip!');
  });

  it('should display error message when isError is true', () => {
    component.isError = true;
    component.errorMessage = 'Error!';

    fixture.detectChanges();

    const errorMessageElement: HTMLDivElement = fixture.nativeElement.querySelector('.error-message');

    expect(errorMessageElement).toBeTruthy();
    expect(errorMessageElement.textContent).toContain('Error!');
  });
});
