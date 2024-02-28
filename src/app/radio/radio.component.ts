import { Component, EventEmitter, Input, Output} from '@angular/core';
import ThemeType from '../types/ThemeType';

@Component({
    selector:'app-radio',
    templateUrl:'./radio.component.html',
    styleUrls:['./radio.component.scss'],
})

export class RadioComponent {
    @Input() label: string = '';
    @Input() type!: string;
    @Input() theme: ThemeType = ThemeType.default;  
}