
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() value: string = '';
  @Input() isError: boolean = false;
  @Input() isWarning: boolean = false;
  @Input() isSuccess: boolean = false;
  @Input() isTooltip: boolean = false;
  @Input() errorMessage: string = 'Please enter valid text';
  @Input() successMessage: string = 'Please eneter valid text'; 
  @Input() warningMessage: string = 'Please eneter valid text'; 
  @Input() tooltipMessage: string = 'Please eneter valid text'; 


}
