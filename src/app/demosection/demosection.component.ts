import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demosection',
  templateUrl: './demosection.component.html',
  styleUrls: ['./demosection.component.scss']
})
export class DemoSectionComponent {
  @Input() heading: string = '';
}