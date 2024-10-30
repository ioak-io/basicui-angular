import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface ColorPaletteColors {
  lightMode: Record<string, string>;
  darkMode: Record<string, string>;
}

@Component({
  selector: 'app-color-palette',
  template: `
    <div class="flex flex-wrap gap-2">
      <div
        *ngFor="let color of palette; let i = index"
        [style.background-color]="color[1]"
        class="w-24 h-24 flex items-center justify-center text-white font-bold rounded shadow-md"
      >
        {{ colorKey[i] }}
      </div>
    </div>
  `,
})
export class ColorPaletteComponent implements OnChanges {
  @Input() colors!: ColorPaletteColors;
  @Input() colorname!: string;
  @Input() isDarkMode = false;

  palette: string[][] = [];
  colorKey = [
    'muted',
    'light',
    'base',
    'dark',
    'text',
    'transparent-muted',
    'transparent-light',
    'transparent-base',
    'transparent-dark',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colors'] || changes['colorname'] || changes['isDarkMode']) {
      this.updatePalette();
    }
  }

  private updatePalette(): void {
    const colorOrder = [
      `--basicui-bg-${this.colorname}-muted`,
      `--basicui-bg-${this.colorname}-light`,
      `--basicui-bg-${this.colorname}`,
      `--basicui-bg-${this.colorname}-dark`,
      `--basicui-bg-${this.colorname}-text`,
      `--basicui-bg-${this.colorname}-transparent-muted`,
      `--basicui-bg-${this.colorname}-transparent-light`,
      `--basicui-bg-${this.colorname}-transparent`,
      `--basicui-bg-${this.colorname}-transparent-dark`,
    ];

    this.palette = colorOrder.map((key) => [
      key,
      this.colors[this.isDarkMode ? 'darkMode' : 'lightMode'][key],
    ]);
  }
}