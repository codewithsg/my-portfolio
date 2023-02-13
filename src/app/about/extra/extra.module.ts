import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguageComponent } from './language/language.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ExtraRoutingModule } from './extra.routing';



@NgModule({
  declarations: [
    CertificateComponent,
    LanguageComponent,
    VolunteeringComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    ExtraRoutingModule
  ]
})
export class ExtraModule { }
