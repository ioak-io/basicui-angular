import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  template: `
    <app-introduction *ngIf="variant === 'introduction'"></app-introduction>
    <app-color-scheme-generator *ngIf="variant === 'color-scheme-generator'"></app-color-scheme-generator>
  `,
})
export class UserGuideComponent {
  @Input() variant: 'introduction' | 'color-scheme-generator' = 'introduction';
}
