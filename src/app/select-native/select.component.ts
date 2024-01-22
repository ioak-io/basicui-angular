import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-native',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
[x: string]: any;
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() selectType: 'single' | 'autocomplete' = 'single';
  @Input() options: { value: string, label: string }[] = [];
  selectedValue: string = '';
  //selectedValues: string[] = [];
  
}