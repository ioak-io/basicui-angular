import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryWrapperComponent } from './story-wrapper.component';
import { ModalComponent } from '../modal/modal.component';

describe('StoryWrapperComponent', () => {
  let component: StoryWrapperComponent;
  let fixture: ComponentFixture<StoryWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryWrapperComponent, ModalComponent],
    });

    fixture = TestBed.createComponent(StoryWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create the StoryWrapperComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the modal', () => {
    expect(component.isOpen).toBeFalsy();

    component.openModal();
    fixture.detectChanges();
    expect(component.isOpen).toBeTruthy();

    component.closeModal();
    fixture.detectChanges();
    expect(component.isOpen).toBeFalsy();
  });

  it('should render the button and modal when isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const modalElement: HTMLElement | null = fixture.nativeElement.querySelector('app-modal');

    expect(buttonElement).toBeTruthy();
    expect(modalElement).toBeTruthy();
  });

  it('should not render the modal when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const modalElement: HTMLElement | null = fixture.nativeElement.querySelector('app-modal');

    expect(buttonElement).toBeTruthy();
    expect(modalElement).toBeFalsy();
  });
});
