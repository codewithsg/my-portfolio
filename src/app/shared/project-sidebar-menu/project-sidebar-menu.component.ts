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

  toggleProjectSideBarMenu(){
    const btn = document.getElementById('projectSideBarArrow');
    const sideBar = document.getElementById('projectSideBarMenu');
    btn?.classList.toggle('rotate-180')
    // sideBar?.classList.toggle('flex')
    sideBar?.classList.toggle('hidden')
  }

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
