import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: ``,
})
export class IndexComponent {
  panels = [
    { name: 'panel1', heading: 'Etiam venenatis', content: '...' },
    { name: 'panel2', heading: 'Lorem ipsum', content: '...' },
    { name: 'panel3', heading: 'Curabitur condimentum risus pharetra diam', content: '...' },
  ];

  handlePanelChange(expanded: string): void {
    console.log('Expanded panel:', expanded);
  }
}