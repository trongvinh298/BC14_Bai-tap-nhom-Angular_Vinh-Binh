import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeTemplateComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeTemplateRoutingModule, FormsModule],
})
export class HomeTemplateModule {}
