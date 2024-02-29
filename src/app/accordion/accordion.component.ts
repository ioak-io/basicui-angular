import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})

export class AccordionComponent {
  @Input() panels: any[] = [];
  expanded = '';
  heading: any;
  theme: any;
  bordered: any;

  @Output() panelChange = new EventEmitter<string>();
  handleChange(panelName: string): void {
    this.expanded = this.expanded === panelName ? '' : panelName;
    this.panelChange.emit(this.expanded);
  }
}