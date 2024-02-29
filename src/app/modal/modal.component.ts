import { Component, EventEmitter, Output, Input } from '@angular/core';
import ThemeType from '../types/ThemeType';
import ButtonVariantType from '../types/ButtonVariantType';
import AlignmentType from '../types/AlignmentType';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() theme: ThemeType = ThemeType.default;
  @Input() variant: ButtonVariantType = ButtonVariantType.default;
  @Input() alignment: AlignmentType = AlignmentType.default;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  onClose() {
    this.closeModal.emit();
  }
}