import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BlogComponent } from './blogs/blogs.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: './home/home.module#HomeModule',
        data: {
            breadcrumb: "Home"
        }
    },
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