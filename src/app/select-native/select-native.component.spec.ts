import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
    });

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
  });

  it('should create the SelectComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    component.label = 'Test Label';
    fixture.detectChanges();

    const labelElement = fixture.nativeElement.querySelector('label');
    expect(labelElement.textContent.trim()).toBe('Test Label');
  });

  it('should render options in select', () => {
    component.options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];
    fixture.detectChanges();

    const selectElement = fixture.nativeElement.querySelector('select');
    const optionElements = selectElement.querySelectorAll('option');

    expect(optionElements.length).toBe(3);
    expect(optionElements[0].textContent.trim()).toBe('');
    expect(optionElements[1].textContent.trim()).toBe('Option 1');
    expect(optionElements[2].textContent.trim()).toBe('Option 2');
  });

  it('should update selectedValue when an option is selected', () => {
    component.options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];
    fixture.detectChanges();

    const selectElement = fixture.nativeElement.querySelector('select');
    selectElement.value = '1';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedValue).toBe('1');
  });
});
