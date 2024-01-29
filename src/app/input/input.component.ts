import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector:'app-input',
    templateUrl: './input.component.html',
    styleUrls:['./input.component.scss']
})

export class InputComponent implements OnInit {
[x: string]: any;
    @Input() control!: FormControl;
    @Input() containerClassName='Name';
    @Input() icon: string | undefined;
    @Input() iconSize =16;
    @Input() placeholder = '';
    @Input() value = '';
    @Input() enableClearButton: boolean | undefined;
    @Input() name: string | undefined;
    @Input() label!: string;
    @Input() for : string | undefined;
    @Input() text : string | undefined;
    @Input() type!: string;
    @Input() isInfo: boolean = false;
    @Input() infoMessage: string = 'Please enter valid text';

    get iconContainerWidth(): number {
        return this.iconSize * 2;
      }
    
      get isShowClearButton(): boolean {
        return this.enableClearButton && this.control?.value;
      }
    
      constructor() {}

      ngOnInit(): void {
        this.control = this.control ?? new FormControl('');
      }
    
      clear() {
        this.control.patchValue('');
      }
      
} 
