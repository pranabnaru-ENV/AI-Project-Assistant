import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./meetings.component').then(
        m => m.MeetingsComponent
      ),
    data: {
      title: 'Meetings'
    }
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-meeting/add-meeting.component').then(
        m => m.AddMeetingComponent
      ),
    data: {
      title: 'Add Meeting'
    }
  }
];