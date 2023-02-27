import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project.routing';
import { SharedModule } from '../shared/shared.module';
import { TwoZeroComponent } from './two-zero/two-zero.component';
import { TwoOneComponent } from './two-one/two-one.component';
import { TwoTwoComponent } from './two-two/two-two.component';
import { TwoThreeComponent } from './two-three/two-three.component';



@NgModule({
  declarations: [
    TwoZeroComponent,
    TwoOneComponent,
    TwoTwoComponent,
    TwoThreeComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ]
})
export class ProjectModule { }
