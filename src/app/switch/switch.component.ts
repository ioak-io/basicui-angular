import { Component, Input, Output, EventEmitter } from '@angular/core';
// import ThemeType from '../types/ThemeType';
// import ModalSizeType from '../types/ModalSizeType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() id: string="";
  @Input() theme: 'default' | 'primary' | 'danger' = 'default';
  @Input() size: 'small'| 'medium'| 'large'| 'default'='small';
  @Input() checked: boolean = false;
  @Input() icon: [string, string] = ["", ""];
}