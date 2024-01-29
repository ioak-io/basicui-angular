import { Component, Input } from '@angular/core';
import ThemeType from '../types/ThemeType';
import ButtonVariantType from '../types/ButtonVariantType';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent {
  @Input() theme: ThemeType = ThemeType.default;
  @Input() onClick?: any;
  @Input() onSubmit?: any;
  @Input() onReset?: any;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: ButtonVariantType = ButtonVariantType.default;
  
  isOpen: boolean = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}