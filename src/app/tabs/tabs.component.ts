
import { Component, Input, Output, EventEmitter } from '@angular/core';
import ThemeType from '../types/ThemeType';
import TabShapeType from '../types/TabShapeType';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() theme: ThemeType = ThemeType.primary;
  @Input() shape: TabShapeType = TabShapeType.default;
  @Input() tabs: Tab[] = [];
  @Input() activeTabId!: string;
  @Input() checkmarkTabId!: string;
  @Output() tabChange = new EventEmitter<string>();

  changeTab(tabId: string): void {
    this.activeTabId = tabId;
    this.tabChange.emit(tabId);
    //this.checkmarkTabId = tabId;
  }
}
export interface Tab {
  id: string;
  header: string;
  content: string;
}
