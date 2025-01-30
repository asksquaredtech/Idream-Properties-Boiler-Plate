import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdreampropertiesComponent } from './idreamproperties.component';

describe('IdreampropertiesComponent', () => {
  let component: IdreampropertiesComponent;
  let fixture: ComponentFixture<IdreampropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdreampropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdreampropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
