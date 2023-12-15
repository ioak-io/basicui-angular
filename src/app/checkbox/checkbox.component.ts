import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector:'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls:['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {
[x: string]: any;
    @Input() control!: FormControl;
    @Input() containerClassName='Name';
    @Input() icon: string | undefined;
    @Input() iconSize =16;
    @Input() enableClearButton: boolean | undefined;
    @Input() name: string | undefined;
    @Input() label!: string;
    @Input() for : string | undefined;
    @Input() type = 'checkbox';
    @Input() checked!: 'checked';
    @Input() danger = false;
    @Input() color = true;
    
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