import{ Component, Input } from '@angular/core';
import ButtonVariantType from '../types/ButtonVariantType';
import  ThemeType  from "../types/ThemeType";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
    @Input() type= 'button';
    @Input() className ='btn-primary';
    @Input() icon!: string;
    @Input() iconSize =18;
    @Input() isWorking!: boolean;
    @Input() isActive!: boolean;
    @Input() disabled!: boolean;
    @Input() theme: ThemeType = ThemeType.default;
    @Input() variant: ButtonVariantType = ButtonVariantType.default;
    @Input() label!: any;
    constructor() {}

}