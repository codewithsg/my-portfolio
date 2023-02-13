import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HelloModule } from './hello/hello.module';
import { ProjectModule } from './project/project.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProjectModule,
    AboutModule,
    HelloModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
