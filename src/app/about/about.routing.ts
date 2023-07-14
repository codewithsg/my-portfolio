import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BiographyComponent } from "./biography/biography.component";
import { CertificateComponent } from "./certificate/certificate.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { LanguageComponent } from "./language/language.component";
import { SoftSkillComponent } from "./soft-skill/soft-skill.component";
import { TechSkillComponent } from "./tech-skill/tech-skill.component";
import { TestimoniesComponent } from "./testimonies/testimonies.component";
import { VolunteeringComponent } from "./volunteering/volunteering.component";

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
        path:'tech-skill',
        component:TechSkillComponent
    },{
        path:'soft-skill',
        component:SoftSkillComponent
    },{
        path:'testimonies',
        component:TestimoniesComponent
    },{
        path:'certificate',
        component:CertificateComponent
    },{
        path:'hobbies',
        component:HobbiesComponent
    },{
        path:'language',
        component:LanguageComponent
    },{
        path:'volunteering',
        component:VolunteeringComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(aboutRoutes)],
    exports:[RouterModule]
})

export class AboutRoutingModule{}