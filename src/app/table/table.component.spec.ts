import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import ThemeType from '../types/ThemeType';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
    });

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('should create the TableComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with provided data', () => {
    fixture.detectChanges();

    const tableElement = fixture.nativeElement.querySelector('table');
    const tbodyElement = tableElement.querySelector('tbody');
    const rows = tbodyElement.querySelectorAll('tr');

    expect(rows.length).toBe(component.tableData.length);

    component.tableData.forEach((row, index) => {
      const cells = rows[index].querySelectorAll('td');
      expect(cells.length).toBe(4);

      expect(cells[0].textContent.trim()).toBe(row.firstName);
      expect(cells[1].textContent.trim()).toBe(row.lastName);
      expect(cells[2].textContent.trim()).toBe(row.email);
      expect(cells[3].textContent.trim()).toBe(row.age.toString());
    });
  });

  it('should apply theme class to table', () => {
    component.theme = ThemeType.default;
    fixture.detectChanges();

    const tableElement = fixture.nativeElement.querySelector('table');
    expect(tableElement.classList.contains('theme-default')).toBeTruthy();
  });
});
