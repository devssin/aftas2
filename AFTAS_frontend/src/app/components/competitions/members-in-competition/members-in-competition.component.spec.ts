import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersInCompetitionComponent } from './members-in-competition.component';

describe('MembersInCompetitionComponent', () => {
  let component: MembersInCompetitionComponent;
  let fixture: ComponentFixture<MembersInCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersInCompetitionComponent]
    });
    fixture = TestBed.createComponent(MembersInCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
