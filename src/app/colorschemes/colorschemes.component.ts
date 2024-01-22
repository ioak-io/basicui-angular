import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colorschemes',
  templateUrl: './colorschemes.component.html',
  styleUrls: ['./colorschemes.component.scss'],
})
export class ColorSchemesComponent {
  @Input() discriminator!: |'adaptive' 
  | 'black' 
  | 'white' 
  | 'black-extended' 
  | 'white-extended' 
  | 'default' 
  | 'default-transparent' 
  | 'primary' 
  | 'primary-transparent' 
  | 'danger' 
  | 'danger-transparent' 
  | 'themes-overview';

  levels = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ];
}