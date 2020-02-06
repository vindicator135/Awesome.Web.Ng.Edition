import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BlogComponent } from './blog/blog.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'blogs',
        pathMatch: 'full'
    },
    {
        path: 'blogs',
        component: BlogComponent
    }
]