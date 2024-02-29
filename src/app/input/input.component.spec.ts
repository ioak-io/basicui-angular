import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the input component', () => {
    expect(component).toBeTruthy();
  });

  it('should render with the provided label, info message, and value', () => {
    const placeholder = 'Dolor sit';
    const label = 'First Name';
    const isInfo = true;
    const value = 'Dolor sit';
    const infoMessage = 'Quisque tincidunt vitae purus id feugiat';

    component.placeholder = placeholder;
    component.label = label;
    component.isInfo = isInfo;
    component.value = value;
    component.infoMessage = infoMessage;

    fixture.detectChanges();

    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    const infoElement: HTMLElement = fixture.nativeElement.querySelector('.info-message');

    expect(inputElement).toBeTruthy();
    expect(inputElement.placeholder).toContain(placeholder);
    expect(inputElement.value).toContain(value);

    expect(infoElement).toBeTruthy();
    expect(infoElement.textContent).toContain(infoMessage);
  });

  it('should update the value when the user types in the input', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    const newValue = 'New Value';

    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.value).toBe(newValue);
  });
});