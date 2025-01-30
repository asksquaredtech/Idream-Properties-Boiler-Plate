import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdreamcricketComponent } from './idreamcricket.component';

describe('IdreamcricketComponent', () => {
  let component: IdreamcricketComponent;
  let fixture: ComponentFixture<IdreamcricketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdreamcricketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdreamcricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
