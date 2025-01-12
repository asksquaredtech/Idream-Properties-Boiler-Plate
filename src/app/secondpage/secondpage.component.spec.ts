import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpageComponent } from './secondpage.component';

describe('SecondpageComponent', () => {
  let component: SecondpageComponent;
  let fixture: ComponentFixture<SecondpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
