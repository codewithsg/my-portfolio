import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-sidebar-menu',
  templateUrl: './project-sidebar-menu.component.html',
  styleUrls: ['./project-sidebar-menu.component.scss']
})
export class ProjectSidebarMenuComponent {
  constructor(
    private router:Router
  ){}

  goToAll(){}

  goTo2020(){
    this.router.navigate(['project/twenty'])
  }

  goTo2021(){
    this.router.navigate(['project/twenty-one'])
  }


  goTo2022(){
    this.router.navigate(['project/twenty-two'])
  }


  goTo2023(){
    this.router.navigate(['project/twenty-three'])
  }



}
