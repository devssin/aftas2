import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTableComponent } from './fish-table.component';

describe('FishTableComponent', () => {
  let component: FishTableComponent;
  let fixture: ComponentFixture<FishTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishTableComponent]
    });
    fixture = TestBed.createComponent(FishTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
