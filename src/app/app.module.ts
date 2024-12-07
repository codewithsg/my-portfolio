import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HelloModule } from './hello/hello.module';
import { ProjectModule } from './project/project.module';
import { SharedModule } from './shared/shared.module';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HelloModule,
    ProjectModule,
    AboutModule,
    AppRoutingModule,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
