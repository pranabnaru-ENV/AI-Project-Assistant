import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./meetings.component').then(m => m.MeetingsComponent),
    data: {
      title: 'Meetings'
    }
  }
];