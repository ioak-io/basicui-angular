// label.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelComponent } from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelComponent],
    });

    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
  });

  it('should create the label component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label text', () => {
    const label = 'Lorem ipsum Dolor sit';
    component.label = label;

    fixture.detectChanges();

    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');

    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toContain(label);
  });
});
