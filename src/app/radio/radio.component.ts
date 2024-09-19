import { Component, EventEmitter, Input, Output } from '@angular/core';
import ThemeType from '../types/ThemeType';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
})

export class RadioComponent {
    @Input() id: string = '';
    @Input() label: string = '';
    @Input() type!: string;
    @Input() theme: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
    @Input() checked !: boolean;

    @Output() onChange = new EventEmitter<boolean>();

    onRadioChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.checked = target.checked;
        this.onChange.emit(this.checked);
    }
}