import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BlogDetailsComponent } from './blog-details/blog-details.component'
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'details/:id',
                component: BlogDetailsComponent,
                data: 
                {
                    title: "BLOG WITH DETAILS",
                    breadcrumb: "Blog Grid View / No Sidebar"
                }
            },
            {
                path: '',
                component: BlogListComponent,
                data: 
                {
                    title: "BLOG WITH DETAILS",
                    breadcrumb: "Blog Grid View / No Sidebar"
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BlogRoutingModule { }