import { TestBed } from '@angular/core/testing';
import { AvatarModule } from './avatar.module';
//import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AvatarModule', () => {
  let module: AvatarModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AvatarModule
      ]
    });
    module = TestBed.inject(AvatarModule);
  });

  it('should have Avatar Module', () => {
    expect(module).toBeTruthy();
  });
});