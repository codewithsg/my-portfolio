import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyComponent } from './biography/biography.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { AboutRoutingModule } from './about.routing';
import { SharedModule } from '../shared/shared.module';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguageComponent } from './language/language.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { TechSkillComponent } from './tech-skill/tech-skill.component';
import { SoftSkillComponent } from './soft-skill/soft-skill.component';



@NgModule({
  declarations: [
    BiographyComponent,
    ExperienceComponent,
    EducationComponent,
    TestimoniesComponent,
    CertificateComponent,
    LanguageComponent,
    VolunteeringComponent,
    HobbiesComponent,
    TechSkillComponent,
    SoftSkillComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
