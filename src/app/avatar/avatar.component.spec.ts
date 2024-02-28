import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
    });

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
  });

  it('should create the avatar component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the avatar with correct size, roundedness, and class when avatarUrl is provided', () => {
    const avatarUrl = 'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_128/v1593253478/trung-vo_bioxmc.png';
    const size = 12;
    const name = 'John Doe';
    const rounded = true;
    const className = 'avatar-container';

    component.avatarUrl = avatarUrl;
    component.size = size;
    component.name = name;
    component.rounded = rounded;
    component.className = className;

    fixture.detectChanges();

    const avatarElement: HTMLDivElement = fixture.nativeElement.querySelector('.app-avatar');

    expect(avatarElement).toBeTruthy();
    expect(avatarElement.classList.contains(className)).toBe(true);
    expect(avatarElement.style.width).toBe(`${size}px`);
    expect(avatarElement.style.height).toBe(`${size}px`);
    expect(avatarElement.style.backgroundImage).toBe(`url('${avatarUrl}')`);
    expect(avatarElement.style.borderRadius).toBe(rounded ? '100%' : '3px');
  });

  it('should not render the avatar container when avatarUrl is not present', () => {
    const avatarUrl = '';

    component.avatarUrl = avatarUrl;

    fixture.detectChanges();

    const avatarElement: HTMLDivElement = fixture.nativeElement.querySelector('.app-avatar');

    expect(avatarElement).toBeFalsy();
  });
});
