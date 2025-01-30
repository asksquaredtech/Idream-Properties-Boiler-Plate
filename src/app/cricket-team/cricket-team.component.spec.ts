import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketTeamComponent } from './cricket-team.component';

describe('CricketTeamComponent', () => {
  let component: CricketTeamComponent;
  let fixture: ComponentFixture<CricketTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
