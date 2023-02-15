import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutSidebarMenuComponent } from './about-sidebar-menu/about-sidebar-menu.component';
import { ProjectSidebarMenuComponent } from './project-sidebar-menu/project-sidebar-menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    AboutSidebarMenuComponent,
    ProjectSidebarMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    AboutSidebarMenuComponent,
    ProjectSidebarMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
