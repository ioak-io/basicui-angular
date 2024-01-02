import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-link',
    templateUrl:'./link.component.html',
    styleUrls:['./link.component.scss'],
})

export class LinkComponent{
    @Input() isPrimary: boolean = false;
    @Input() isPrimarynoglow: boolean = false;
    @Input() isPrimarynounderline: boolean = false;
    @Input() isDefaultnounderline: boolean = false;
}