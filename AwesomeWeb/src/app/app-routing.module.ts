import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BlogComponent } from './blogs/blogs.component'

export const routes: Routes = [
    {
        path: 'blogs',
        component: BlogComponent,
        loadChildren: './blogs/blogs.module#BlogModule',
        data: {
            breadcrumb: "Blog"
        }
    },
    {
        path: '',
        redirectTo: 'blogs',
        pathMatch: 'full'
    }
]