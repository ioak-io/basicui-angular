import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() isChecked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() label!: string;

  onCheckboxChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.checkedChange.emit(this.isChecked);
  }
}