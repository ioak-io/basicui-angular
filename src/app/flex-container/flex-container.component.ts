import { Component , Input} from '@angular/core'

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent {
  children: any;
  @Input() orientation: 'default' | 'column' = 'default';
  @Input() wrap: boolean = false;
  @Input() alignX: 'default' | 'center' | 'right' = 'default';
  @Input() alignY: 'default' | 'middle' | 'bottom' = 'default';
  @Input() gap: 'default' | 'less' | 'more' = 'default';
}
