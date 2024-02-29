import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent, Tab } from './tabs.component';
import { By } from '@angular/platform-browser';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsComponent],
    });

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;

    component.tabs = [
      { id: '1', header: 'Tab 1', content: 'Content 1' },
      { id: '2', header: 'Tab 2', content: 'Content 2' },
      { id: '3', header: 'Tab 3', content: 'Content 3' },
      { id: '4', header: 'Tab 4', content: 'Content 4' },
      { id: '5', header: 'Tab 5', content: 'Content 5' },
      { id: '6', header: 'Tab 6', content: 'Content 6' },
    ];

    fixture.detectChanges();
  });

  it('should create the TabsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should change active tab when a tab is clicked', () => {
    const tabButton = fixture.debugElement.query(By.css('.basicui-tabs__ul__li__button'));
    tabButton.triggerEventHandler('click', null);

    expect(component.activeTabId).toBe('1');
  });
});
