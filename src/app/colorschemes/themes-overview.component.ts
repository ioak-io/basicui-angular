import { Component } from '@angular/core';

@Component({
  selector: 'app-themes-overview',
  templateUrl: './themes-overview.component.html',
  styleUrls: ['./colorschemes.component.scss'],
})
export class ThemesOverviewComponent {
  themes: string[] = [
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
    'danger-transparent',
  ];
}