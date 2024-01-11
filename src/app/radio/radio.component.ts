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
    @Input() isChecked: boolean = false;
    @Output() isCheckedChange = new EventEmitter<boolean>();
    @Input() name?: string;
    @Input() id?: string;
    @Input() value?: any;
    @Output() radioChange = new EventEmitter<string>();
    onChange(value: string): void {
      this.radioChange.emit(value);
    }
}