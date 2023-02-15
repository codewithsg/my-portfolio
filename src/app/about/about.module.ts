import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyComponent } from './biography/biography.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { ExtraModule } from './extra/extra.module';
import { AboutRoutingModule } from './about.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BiographyComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    TestimoniesComponent
  ],
  imports: [
    CommonModule,
    ExtraModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
