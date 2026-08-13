import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Specific paths go FIRST
  {
    path: 'add',
    loadComponent: () => import('./add-project/add-project.component').then(m => m.AddProjectComponent),
    data: {
      title: 'Add Project'
    }
  },
  // 2. Empty paths go LAST with pathMatch: 'full'
  {
    path: '',
    loadComponent: () => import('./projects.component').then(m => m.ProjectsComponent),
    data: {
      title: 'Projects'
    },
    pathMatch: 'full' // <-- This stops the router from getting confused!
  }
];