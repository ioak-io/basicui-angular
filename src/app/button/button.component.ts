
import{ Component, Input } from '@angular/core';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType  from "../types/ThemeType";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() theme: ThemeType = ThemeType.default;
    @Input() variant: ButtonVariantType = ButtonVariantType.default;
    @Input() label!: string;
    @Input() loading = false;
    @Input() onClick?: any;
  @Input() onSubmit?: any;
  @Input() onReset?: any;
}