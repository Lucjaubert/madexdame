import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
    pathMatch: 'full',
    title: 'Madedame'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;
