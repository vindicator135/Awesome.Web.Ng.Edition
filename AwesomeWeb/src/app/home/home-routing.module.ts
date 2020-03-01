import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from './details/details.component';
import { HomeListComponent } from './list/list.component';


const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'details/:id',
              component: HomeDetailsComponent,
              data: 
              {
                  title: "HOME DETAILS",
                  breadcrumb: "Home / Details"
              }
          },
          {
              path: '',
              component: HomeListComponent,
              data: 
              {
                  title: "HOME LIST",
                  breadcrumb: "HOME List / No Sidebar"
              }
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }