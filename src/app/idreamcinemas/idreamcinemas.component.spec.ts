import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdreamcinemasComponent } from './idreamcinemas.component';

describe('IdreamcinemasComponent', () => {
  let component: IdreamcinemasComponent;
  let fixture: ComponentFixture<IdreamcinemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdreamcinemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdreamcinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
