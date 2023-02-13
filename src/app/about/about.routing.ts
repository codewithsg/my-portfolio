import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BiographyComponent } from "./biography/biography.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { TestimoniesComponent } from "./testimonies/testimonies.component";

const aboutRoutes:Routes = [
    {
        path:'bio',
        component:BiographyComponent
    },{
        path:'education',
        component:EducationComponent
    },{
        path:'experience',
        component:ExperienceComponent
    },{
        path:'extra',
        loadChildren:()=>import('./extra/extra.module').then(m=>m.ExtraModule)
    },{
        path:'skills',
        component:SkillsComponent
    },{
        path:'testimonies',
        component:TestimoniesComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(aboutRoutes)],
    exports:[RouterModule]
})

export class AboutRoutingModule{}