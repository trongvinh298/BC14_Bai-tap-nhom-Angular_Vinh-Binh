import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from 'src/app/pages/home-template/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class CandeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: any) {
    const result =
      component.canDeactivateRegister() ||
      window.confirm(`Are you sure you want to leave?`);
    return result;
  }
}
