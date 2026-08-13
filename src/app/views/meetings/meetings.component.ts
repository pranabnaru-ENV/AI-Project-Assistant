import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableDirective
} from '@coreui/angular';


interface IMeeting {
  id: number;
  title: string;
  meetingType: string;
  project: string;
  client: string;
  date: string;
  time: string;
  platform: string;
  participants: number;
  status: string;
  aiStatus: string;
}


@Component({
  selector: 'app-meetings',

  imports: [
    RouterLink,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    RowComponent,
    TableDirective
  ],

  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.scss',
})
export class MeetingsComponent {

  public meetings: IMeeting[] = [

    {
      id: 1,
      title: 'Sprint Planning',
      meetingType: 'Project Meeting',
      project: 'AI Project Assistant',
      client: 'ABC Technologies',
      date: '13 Aug 2026',
      time: '3:00 PM',
      platform: 'Microsoft Teams',
      participants: 8,
      status: 'Completed',
      aiStatus: 'Completed'
    },

    {
      id: 2,
      title: 'Client Requirement Discussion',
      meetingType: 'Client Meeting',
      project: 'AI Project Assistant',
      client: 'ABC Technologies',
      date: '14 Aug 2026',
      time: '11:00 AM',
      platform: 'Microsoft Teams',
      participants: 6,
      status: 'Upcoming',
      aiStatus: 'Not Started'
    },

    {
      id: 3,
      title: 'Development Review',
      meetingType: 'Development Meeting',
      project: 'CRM Implementation',
      client: 'XYZ Technologies',
      date: '14 Aug 2026',
      time: '3:00 PM',
      platform: 'Microsoft Teams',
      participants: 5,
      status: 'Upcoming',
      aiStatus: 'Not Started'
    },

    {
      id: 4,
      title: 'QA Discussion',
      meetingType: 'QA Meeting',
      project: 'CRM Implementation',
      client: 'XYZ Technologies',
      date: '12 Aug 2026',
      time: '5:00 PM',
      platform: 'Microsoft Teams',
      participants: 7,
      status: 'Completed',
      aiStatus: 'Processing'
    },

    {
      id: 5,
      title: 'Authentication Discussion',
      meetingType: 'Technical Meeting',
      project: 'AI Project Assistant',
      client: 'ABC Technologies',
      date: '10 Aug 2026',
      time: '2:00 PM',
      platform: 'Microsoft Teams',
      participants: 4,
      status: 'Completed',
      aiStatus: 'Completed'
    }

  ];

}