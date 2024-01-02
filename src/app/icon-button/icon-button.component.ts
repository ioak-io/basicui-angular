import { Component } from '@angular/core';

@Component({
    selector:'app-icon-button',
    templateUrl:'./icon-button.component.html',
    styleUrls:['./icon-button.component.scss'],
})

export class IconButtonComponent{
    isDefaultoutlinevariant: boolean = false;
    isDefaultfillvariant: boolean = false;
    isDefaulttransparentvariant: boolean = false;
    isPrimary: boolean = false;
    isPrimaryoutlinevariant: boolean = false;
    isPrimaryfillvariant: boolean = false;
    isPrimarytransparentvariant: boolean = false;


}