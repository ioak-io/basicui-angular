import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() isChecked: boolean = false;
  @Input() isError: boolean = false;
  @Input() isPrimary: boolean = false;
  @Output() isCheckedChange = new EventEmitter<boolean>();

  toggleSwitch(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.isCheckedChange.emit(this.isChecked);
  }
}