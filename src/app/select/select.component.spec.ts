import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { SelectComponent } from "./select.component";

describe('SelectComponent',() => {
    let component: SelectComponent;
    let fixture: ComponentFixture<SelectComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[SelectComponent],
            imports:[FormsModule],
        });
        fixture = TestBed.createComponent(SelectComponent);
        component = fixture.componentInstance;
    });
    it('should create the select component', () => {
        expect(component).toBeTruthy();
    });
    
    it('should render a single select with options and a selected value', () => {
        const selectType = 'single';
        const options = [
            { value: '1', label: 'Lorem ipsum' },
            { value: '2', label: 'Another long text another long text' },
            { value: '3', label: 'Dolor sit' },
        ];
        const selectedValue = 'Dolor sit';

        component.selectType = selectType;
        component.options = options;
        component.selectedValue = selectedValue;

        fixture.detectChanges();
        const selectElement = HTMLSelectElement = fixture.nativeElement.querySelector('select');
        const selectedOption = selectElement.options[selectElement.selectedValue];

        expect(selectElement).toBeTruthy();
        expect(selectedOption.value).toBe('3');
    });

    it('should render an autocomplete select with options, a selected value, and a placeholder', () => {
        const selectType = 'autocomplete';
        const options = [
            { value: '1', label: 'Lorem ipsum' },
            { value: '2', label: 'Another long text another long text' },
            { value: '3', label: 'Dolor sit' },
        ];
        const selectedValue = 'Dolor sit';
        const placeholder = 'Enter select option';

        component.selectType = selectType;
        component.options = options;
        component.selectedValue = selectedValue;
        component.placeholder = placeholder;

        fixture.detectChanges();

        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
        const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('select');

        expect(inputElement).toBeTruthy();
        expect(selectElement).toBeTruthy();
        expect(inputElement.placeholder).toBe(placeholder);
    });
})