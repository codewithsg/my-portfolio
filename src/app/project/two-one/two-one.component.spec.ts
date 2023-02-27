import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoOneComponent } from './two-one.component';

describe('TwoOneComponent', () => {
  let component: TwoOneComponent;
  let fixture: ComponentFixture<TwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
