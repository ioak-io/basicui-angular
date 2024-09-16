import { Component, Input, Output, EventEmitter } from '@angular/core';
import ThemeType from '../types/ThemeType';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label : string = 'Lorem Dolor';
  @Input() theme: ThemeType = ThemeType.default;
  @Input() type!: string;
  @Input() checked !: boolean;
  @Input() defaultChecked !: boolean;
}