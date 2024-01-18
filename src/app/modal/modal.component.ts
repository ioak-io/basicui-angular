import { Component, EventEmitter, Output, Input } from '@angular/core';
import ThemeType from '../types/ThemeType';
import ButtonVariantType from '../types/ButtonVariantType';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() theme: ThemeType = ThemeType.default || ThemeType.primary;
  @Input() variant: ButtonVariantType = ButtonVariantType.default;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}