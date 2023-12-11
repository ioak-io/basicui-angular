import { TestBed } from '@angular/core/testing';
import { FirstSampleModule } from './first-sample.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('FirstSampleModule', () => {
  let module: FirstSampleModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FirstSampleModule
      ]
    });
    module = TestBed.inject(FirstSampleModule);
  });

  it('should have FirstSample Module', () => {
    expect(module).toBeTruthy();
  });
});