import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  // [x: string]: any;
  @Input() placeholder = 'Select Dropdown';
  @Input() selectType: 'single' | 'multiple' | 'autocomplete' = 'single';
  @Input() options: { value: string | number, label: string }[] = [];
  @Input() allowNewValues = false;
  @Input() autocomplete = false;

  value: (string | number)[] = [];

  searchText: string = '';
  isVisible: boolean = false;
  filteredOptions: { value: string | number, label: string }[] = [];

  ngOnInIt() {
    this.filteredOptions = this.options;
  }

  ngOnChanges() {
    this.filteredOptions = this.options;
  }

  toggleDropdown() {
    this.isVisible = !this.isVisible;
  }

  handleOptionClick(optionValue: string | number) {
    if (this.selectType === 'single') {
      this.value = [optionValue];
      this.isVisible = false;
    } else {
      if (this.value.includes(optionValue)) {
        this.value = this.value.filter(item => item != optionValue);
      }
      else {
        this.value = [...this.value, optionValue];
      }
    }

  }

  onSearchTextChange(searchText: string) {
    const _searchText = searchText.toLowerCase();
    if (!_searchText.trim()) {
      this.filteredOptions = this.options;
    } else {
      this.filteredOptions = this.options.filter(item => (item.label + '').toLowerCase().includes(_searchText));

      if (this.allowNewValues && !this.filteredOptions.find(item => item.label === searchText)) {
        this.filteredOptions.unshift({ label: searchText, value: searchText });
      }
    }

  }

  getSelectedtext(): string{
    return this.value.map(val => this.options.find(option => option.value === val)?.label || val).join(', ');
  }
}

