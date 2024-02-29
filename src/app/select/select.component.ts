import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  [x: string]: any;
  @Input() placeholder = '';
  @Input() selectType: 'single' | 'autocomplete' = 'single';
  @Input() options: { value: string, label: string }[] = [];
  selectedValue: string = '';
}