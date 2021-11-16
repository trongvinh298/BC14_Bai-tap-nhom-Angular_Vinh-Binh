import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { HeaderComponent } from './_components/header/header.component';

@NgModule({
  declarations: [HomeTemplateComponent, HeaderComponent],
  imports: [CommonModule, HomeTemplateRoutingModule],
})
export class HomeTemplateModule {}
