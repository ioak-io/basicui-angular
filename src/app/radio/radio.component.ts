import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-radio',
    templateUrl:'./radio.component.html',
    styleUrls:['./radio.component.scss'],
})

export class RadioComponent {
    @Input() label: string = '';
    @Input() isChecked: boolean = false;
    @Input() isError: boolean = false;
    @Input() isPrimary: boolean = false;
    @Output() isCheckedChange = new EventEmitter<boolean>();
  
    toggleRadio(event: Event) {
      this.isChecked = (event.target as HTMLInputElement).checked;
      this.isCheckedChange.emit(this.isChecked);
    }
  }