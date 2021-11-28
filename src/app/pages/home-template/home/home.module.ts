import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { MaterialModule } from 'src/app/_core/shares/share-module/material-module';
import { CourseComponent } from './course/course.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HomeComponent, CourseComponent, ModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ShareModuleModule,
    MaterialModule,
  ],
})
export class HomeModule {}
