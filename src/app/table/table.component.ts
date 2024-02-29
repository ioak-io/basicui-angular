import { Component, Input } from '@angular/core';
import ThemeType from '../types/ThemeType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() theme: ThemeType = ThemeType.default;
  @Input() inverse?: boolean;
  @Input() inverseHeader?: boolean;
  @Input() striped?: boolean;
  @Input() hover?: boolean;
  @Input() bordered?: boolean;
  @Input() small?: boolean;

  tableData = [
    { firstName: 'Gene', lastName: 'Tierney', email: 'gene.tierney@ioak.org', age: 36 },
    { firstName: 'Jack', lastName: 'Lemmon', email: 'jack.lemmon@ioak.org', age: 28 },
    { firstName: 'Billy', lastName: 'Wilder', email: 'billy.wilder@ioak.org', age: 45 },
    { firstName: 'Katherine', lastName: 'Hepburn', email: 'katherina.hepburn@ioak.org', age: 27 },
  ];
}