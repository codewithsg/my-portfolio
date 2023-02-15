import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSidebarMenuComponent } from './about-sidebar-menu.component';

describe('AboutSidebarMenuComponent', () => {
  let component: AboutSidebarMenuComponent;
  let fixture: ComponentFixture<AboutSidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSidebarMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
