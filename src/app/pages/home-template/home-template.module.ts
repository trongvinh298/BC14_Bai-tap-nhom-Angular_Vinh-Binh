import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_components/navbar-home/navbar-home.component';


@NgModule({
  declarations: [
    HomeTemplateComponent,
    NavbarHomeComponent
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule
  ]
})
export class HomeTemplateModule { }
