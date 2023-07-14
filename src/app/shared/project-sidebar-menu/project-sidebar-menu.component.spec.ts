import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSidebarMenuComponent } from './project-sidebar-menu.component';

describe('ProjectSidebarMenuComponent', () => {
  let component: ProjectSidebarMenuComponent;
  let fixture: ComponentFixture<ProjectSidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSidebarMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
