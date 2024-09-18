import { Component, Input, Output, EventEmitter } from '@angular/core';
import ThemeType from '../types/ThemeType';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() id: string = '';
  @Input() label: string = 'Lorem Dolor';
  @Input() theme: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
  @Input() type!: string;
  @Input() checked: boolean = false;
  @Input() defaultChecked !: boolean;

  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.checkedChange.emit(this.checked);
  }
}


