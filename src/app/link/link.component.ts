import { Component, Input, Output, EventEmitter } from '@angular/core';
import ThemeType from '../types/ThemeType';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})

export class LinkComponent {
    @Input() theme: ThemeType = ThemeType.primary;
    @Input() label!: string;
    @Input() noUnderline!: boolean;
    @Input() noGlow!: boolean;
}