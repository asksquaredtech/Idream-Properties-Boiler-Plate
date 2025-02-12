import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdreamvistaraComponent } from './idreamvistara.component';

describe('IdreamvistaraComponent', () => {
  let component: IdreamvistaraComponent;
  let fixture: ComponentFixture<IdreamvistaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdreamvistaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdreamvistaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
