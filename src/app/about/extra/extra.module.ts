import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguageComponent } from './language/language.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { HobbiesComponent } from './hobbies/hobbies.component';



@NgModule({
  declarations: [
    CertificateComponent,
    LanguageComponent,
    VolunteeringComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExtraModule { }
