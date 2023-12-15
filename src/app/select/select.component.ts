import { Component, Input, EventEmitter, Output } from '@angular/core';
//import { FormControl } from '@angular/forms';

@Component({
    selector:'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})

/*export class SelectComponent implements OnInit{
    @Input() control!: FormControl;
    @Input() containerClassName='Name';
    @Input() icon: string | undefined;
    @Input() iconSize =16;
    @Input() enableClearButton: boolean | undefined;
    @Input() name: string | undefined;
    @Input() label!: string;
    @Input() for : string | undefined;
    @Input() type = 'select';
    
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

}*/
export class SelectComponent {
  @Input() options: { value: any; label: string }[] = [];
  @Output() selectionChange = new EventEmitter<any>();

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);
  }
}