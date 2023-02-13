import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CertificateComponent } from "./certificate/certificate.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { LanguageComponent } from "./language/language.component";
import { VolunteeringComponent } from "./volunteering/volunteering.component";

const extraRoutes:Routes = [
    {
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
    imports:[RouterModule.forChild(extraRoutes)],
    exports:[RouterModule]
})

export class ExtraRoutingModule{}