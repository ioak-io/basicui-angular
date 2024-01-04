
import { Component, Input } from '@angular/core';
import ButtonVariantType  from '../types/ButtonVariantType';
import ThemeType from '../types/ThemeType';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() theme: ThemeType = ThemeType.default;
  @Input() onClick?: any;
  @Input() onSubmit?: any;
  @Input() onReset?: any;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: ButtonVariantType = ButtonVariantType.default;
  @Input() children: any;
  @Input() circle = false;
  @Input() loading = false;
}









/*import { Component, Input } from '@angular/core';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType from '../types/ThemeType';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  [x: string]: any;
  @Input() theme?: ThemeType;
  @Input() variant?: ButtonVariantType;
  @Input() type?: string;
  circle?: boolean;
  @Input() loading?: boolean;

  onClick(): void {
    console.log('Button Clicked!');
  }
}*/

/*import { Component, Input, Output, EventEmitter } from '@angular/core';
import  ThemeType  from '../types/ThemeType';
import ButtonVariantType  from '../types/ButtonVariantType';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() type!: 'button';
  @Input() theme: ThemeType = ThemeType.default;
  @Input() variant: ButtonVariantType = ButtonVariantType.default;
  @Input() loading: boolean = false;
  @Input() circle: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}*/