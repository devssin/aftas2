import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingsInCompetitionComponent } from './huntings-in-competition.component';

describe('HuntingsInCompetitionComponent', () => {
  let component: HuntingsInCompetitionComponent;
  let fixture: ComponentFixture<HuntingsInCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingsInCompetitionComponent]
    });
    fixture = TestBed.createComponent(HuntingsInCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
