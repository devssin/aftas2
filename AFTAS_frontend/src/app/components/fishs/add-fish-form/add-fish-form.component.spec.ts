import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFishFormComponent } from './add-fish-form.component';

describe('AddFishFormComponent', () => {
  let component: AddFishFormComponent;
  let fixture: ComponentFixture<AddFishFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFishFormComponent]
    });
    fixture = TestBed.createComponent(AddFishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
