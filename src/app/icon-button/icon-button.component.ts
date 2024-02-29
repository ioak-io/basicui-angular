
import { Component, Input } from '@angular/core';
import ButtonVariantType from '../types/ButtonVariantType';
import ThemeType from '../types/ThemeType';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() theme: ThemeType = ThemeType.primary;
  @Input() onClick?: any;
  @Input() onSubmit?: any;
  @Input() onReset?: any;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: ButtonVariantType = ButtonVariantType.default;
  @Input() children: any;
  @Input() circle = false;
  @Input() loading = false;
}