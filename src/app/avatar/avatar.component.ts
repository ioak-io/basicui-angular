import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() avatarUrl!: string;
  @Input() size = 12;
  //@Input() height= 64;
  //@Input() width= 64;
  @Input() name = '';
  @Input() rounded = true;
  @Input() className = '';
  //@Input() transform= '';
  //@Input() rotate= true;
  //@Input() skew = true;

  get style() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      'background-image': `url('${this.avatarUrl}')`,
      'border-radius': this.rounded ? '100%' : '3px',
      //'transform' : this.rotate ? 'rotateZ(45deg)' : 'rotateZ(0deg)',
      //'transition': this.skew ? 'skewX(25deg)': 'skew(0deg 0deg)'
      //transform: `${this.rotate ? 'rotateZ(0deg)' : 'rotateZ(45deg)'} ${this.skew ? 'skewX(25deg)' : 'skew(-20deg 0deg)'}`
    };
    
  }
}
