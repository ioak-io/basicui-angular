import { CheckboxComponent } from '../checkbox/checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;

  beforeEach(() => {
    component = new CheckboxComponent();
  });

  it('should be able to init', () => {
    component.ngOnInit();
    expect(component.control).toBeTruthy();
  });
  it('should be able to get icon size', () => {
    expect(component.iconContainerWidth).toEqual(32);
  });
  it('should be able to get return  is Show Clear Button', () => {
    expect(typeof component.isShowClearButton).toEqual('undefined');
  });
  it('should be able to clear control', () => {
    component.ngOnInit();
    spyOn(component.control, 'patchValue').and.callThrough();
    component.clear();
    expect(component.control.patchValue).toHaveBeenCalled();
  });
});