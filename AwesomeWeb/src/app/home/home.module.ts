import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailsComponent } from './details/details.component';
import { HomeListComponent } from './list/list.component';



@NgModule({
  declarations: [HomeComponent, HomeDetailsComponent, HomeListComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
