import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
    });

    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
  });

  it('should create the BreadcrumbsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display breadcrumbs with correct items', () => {
    const breadcrumbItems = ['Projects', 'Angular Jira Clone', 'Kanban Board'];
    component.items = breadcrumbItems;
    fixture.detectChanges();

    const breadcrumbElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('.text-textMedium.text-15');
    expect(breadcrumbElements.length).toBe(1);

    const breadcrumbText = breadcrumbElements[0].textContent;
    breadcrumbItems.forEach(item => {
      expect(breadcrumbText).toContain(item);
    });

    const slashSeparators = breadcrumbElements[0].querySelectorAll('.relative.mx-2.font-lg');
    expect(slashSeparators.length).toBe(breadcrumbItems.length - 1);
  });
});
