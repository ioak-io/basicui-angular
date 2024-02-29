import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoSectionComponent } from './demosection.component';

describe('DemoSectionComponent', () => {
  let component: DemoSectionComponent;
  let fixture: ComponentFixture<DemoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoSectionComponent],
    });

    fixture = TestBed.createComponent(DemoSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create the DemoSectionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct heading', () => {
    const headingText = 'Sample Heading';
    component.heading = headingText;
    fixture.detectChanges();

    const headingElement: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toContain(headingText);
  });
});
