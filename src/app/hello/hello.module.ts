import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HelloRoutingModule } from './hello.routing';



@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule
  ]
})
export class HelloModule { }
