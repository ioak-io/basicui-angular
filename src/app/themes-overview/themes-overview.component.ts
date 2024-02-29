import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-themes-overview',
  templateUrl: './themes-overview.component.html',
})
export class ThemesOverviewComponent {
  themes = [
    'adaptive',
    'black',
    'black-extended',
    'white',
    'white-extended',
    'default',
    'default-transparent',
    'primary',
    'primary-transparent',
    'warning',
    'warning-transparent',
    'danger',
    'danger-transparent'
  ];
}