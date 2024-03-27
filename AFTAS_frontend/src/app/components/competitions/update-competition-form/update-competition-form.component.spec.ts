import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompetitionFormComponent } from './update-competition-form.component';

describe('UpdateCompetitionFormComponent', () => {
  let component: UpdateCompetitionFormComponent;
  let fixture: ComponentFixture<UpdateCompetitionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCompetitionFormComponent]
    });
    fixture = TestBed.createComponent(UpdateCompetitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
