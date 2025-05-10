import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsuccessComponent } from './formsuccess.component';

describe('FormsuccessComponent', () => {
  let component: FormsuccessComponent;
  let fixture: ComponentFixture<FormsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
