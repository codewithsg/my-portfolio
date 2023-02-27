import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TwoOneComponent } from "./two-one/two-one.component";
import { TwoThreeComponent } from "./two-three/two-three.component";
import { TwoTwoComponent } from "./two-two/two-two.component";
import { TwoZeroComponent } from "./two-zero/two-zero.component";

const projectRoutes:Routes = [
    {
        path:'',
        component:TwoThreeComponent
    },{
        path:'twwnty-three',
        component:TwoThreeComponent
    },{
        path:'twenty-two',
        component:TwoTwoComponent
    },{
        path:'twenty-one',
        component:TwoOneComponent
    },{
        path:'twenty',
        component:TwoZeroComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(projectRoutes)],
    exports:[RouterModule]
})

export class ProjectRoutingModule{}