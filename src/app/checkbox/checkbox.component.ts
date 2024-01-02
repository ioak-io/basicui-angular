import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Input() isError: boolean = false;
  @Input() isTooltip: boolean = false;
  @Output() isCheckedChange = new EventEmitter<boolean>();

  toggleCheckbox(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.isCheckedChange.emit(this.isChecked);
  }
}