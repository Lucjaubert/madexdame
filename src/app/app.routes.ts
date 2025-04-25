import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
    pathMatch: 'full',
    title: 'Madexdame'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;
