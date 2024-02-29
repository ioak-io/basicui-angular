import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
    });

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ModalComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeModal event when close button is clicked', () => {
    let closeModalEmitted = false;
    component.closeModal.subscribe(() => {
      closeModalEmitted = true;
    });

    const closeButton = fixture.debugElement.query(By.css('.basicui-modal-header__close'));
    closeButton.triggerEventHandler('click', null);

    expect(closeModalEmitted).toBeTruthy();
  });
});
