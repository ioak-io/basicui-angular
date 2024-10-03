import { Component, Input } from '@angular/core';
interface OptionsObjectType {
  name: string;
  value: string | number;
}
@Component({
  selector: 'app-select-native',
  templateUrl: './select-native.component.html',
  styleUrls: ['./select-native.component.scss']
})
export class SelectNativeComponent {
  @Input() initialValues?: (string | number)[];
  @Input() options: OptionsObjectType[] = [];
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() tooltip?: string;
  @Input() errorMessage?: string;
  @Input() warningMessage?: string;
  @Input() successMessage?: string;
  @Input() multiple?: boolean = false;
  @Input() autocomplete?: boolean = false;

  values: (string | number)[] = [];

  ngOnInit(): void {
    if (this.initialValues && this.initialValues.length > 0) {
      this.values = [...this.initialValues];
    }
  }

  isSelected(option: string | number): boolean {
    return this.values.includes(option);
  }
}