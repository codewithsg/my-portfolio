import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoZeroComponent } from './two-zero.component';

describe('TwoZeroComponent', () => {
  let component: TwoZeroComponent;
  let fixture: ComponentFixture<TwoZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoZeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
