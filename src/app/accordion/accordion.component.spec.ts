import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionComponent],
    });

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
  });

  it('should create the AccordionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should handle panel expansion and collapse', () => {
    const panels = [
      { name: 'panel1', heading: 'Panel 1', content: 'Content 1' },
      { name: 'panel2', heading: 'Panel 2', content: 'Content 2' },
      { name: 'panel3', heading: 'Panel 3', content: 'Content 3' },
    ];
    component.panels = panels;
    fixture.detectChanges();

    expect(component.expanded).toBeFalsy();

    component.handleChange('panel1');
    fixture.detectChanges();
    expect(component.expanded).toBe('panel1');

    component.handleChange('panel1');
    fixture.detectChanges();
    expect(component.expanded).toBeFalsy();

    component.handleChange('panel2');
    fixture.detectChanges();
    expect(component.expanded).toBe('panel2');
  });
});
