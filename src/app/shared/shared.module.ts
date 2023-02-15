import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutSidebarMenuComponent } from './about-sidebar-menu/about-sidebar-menu.component';



@NgModule({
  declarations: [
    NavBarComponent,
    AboutSidebarMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    AboutSidebarMenuComponent
  ]
})
export class SharedModule { }
