import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BlogComponent } from './blog/blog.component'

export const routes: Routes = [
    {
        path: 'blogs',
        component: BlogComponent,
        loadChildren: './blog/blog.module#BlogModule',
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