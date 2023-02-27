import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTwoComponent } from './two-two.component';

describe('TwoTwoComponent', () => {
  let component: TwoTwoComponent;
  let fixture: ComponentFixture<TwoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
