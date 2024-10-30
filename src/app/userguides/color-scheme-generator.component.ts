import { Component, OnInit } from '@angular/core';
import { generateCompleteColorScheme } from './util';

@Component({
  selector: 'app-color-scheme-generator',
  template: `
    <div>
      <input
        type="color"
        [value]="baseColor"
        (input)="onChangeBaseColor($event)"
        class="form-control"
      />
      <input
        type="text"
        [value]="colorname"
        (input)="onChange($event)"
        class="form-control"
      />
      <app-color-palette
        *ngIf="palette"
        [colors]="palette"
        [colorname]="colorname"
        [isDarkMode]="isDarkMode"
      ></app-color-palette>
      <button (click)="onCopy()" class="btn btn-primary">Copy CSS</button>
    </div>
  `,
})
export class ColorSchemeGeneratorComponent implements OnInit {
  palette: any;
  baseColor = '#CF8BA9';
  colorname = 'secondary';
  isDarkMode = false;

  ngOnInit(): void {
    this.updatePalette();
  }

  onChangeBaseColor(event: Event): void {
    this.baseColor = (event.target as HTMLInputElement).value;
    this.updatePalette();
  }

  onChange(event: Event): void {
    this.colorname = (event.target as HTMLInputElement).value;
    this.updatePalette();
  }

  private updatePalette(): void {
    this.palette = generateCompleteColorScheme(this.baseColor, this.colorname);
  }

  private generateCSS(mode: string): string {
    const theme = this.palette[mode];
    return Object.entries(theme)
      .map(([key, value]) => {
        return `${key}: ${value};`;
      })
      .join('\n');
  }

  async onCopy(): Promise<void> {
    const lightModeCSS = this.generateCSS('lightMode');
    const darkModeCSS = this.generateCSS('darkMode');
    try {
      await navigator.clipboard.writeText(
        `.basicui-light {\n ${lightModeCSS} \n} .basicui-dark {\n ${darkModeCSS} \n}`
      );
    } catch (err) {
      console.error('Failed to copy CSS to clipboard: ', err);
    }
  }
}