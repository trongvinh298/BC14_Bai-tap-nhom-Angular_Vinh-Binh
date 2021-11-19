import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavbarDashboardComponent } from './_components/navbar-dashboard/navbar-dashboard.component';

@NgModule({
  declarations: [DashboardComponent, NavbarDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
