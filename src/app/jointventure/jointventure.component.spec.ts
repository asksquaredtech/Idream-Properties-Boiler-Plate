import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointventureComponent } from './jointventure.component';

describe('JointventureComponent', () => {
  let component: JointventureComponent;
  let fixture: ComponentFixture<JointventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JointventureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JointventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
