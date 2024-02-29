import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render avatar image with correct size and rounded corners', () => {
    const avatarUrl = 'https://example.com/avatar.jpg';
    const size = 50;
    component.avatarUrl = avatarUrl;
    component.size = size;
    component.rounded = true;
    fixture.detectChanges();

    const avatarElement = fixture.nativeElement.querySelector('.avatar-container');
    expect(avatarElement).toBeTruthy();
    expect(avatarElement.style.width).toBe(`${size}px`);
    expect(avatarElement.style.height).toBe(`${size}px`);
    expect(avatarElement.style.backgroundImage).toContain(avatarUrl);
    expect(avatarElement.style.borderRadius).toBe('100%');
  });

  it('should render avatar image with square corners if rounded is set to false', () => {
    const avatarUrl = 'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_128/v1593253478/trung-vo_bioxmc.png';
    component.avatarUrl = avatarUrl;
    component.rounded = false;
    fixture.detectChanges();

    const avatarElement = fixture.nativeElement.querySelector('.avatar-container');
    expect(avatarElement).toBeTruthy();
    expect(avatarElement.style.borderRadius).toBe('3px');
  });
});
