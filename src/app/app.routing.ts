import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/hello',
        pathMatch: "full"
    }, {
        path: 'hello',
        loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)
    }, {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    }, {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }