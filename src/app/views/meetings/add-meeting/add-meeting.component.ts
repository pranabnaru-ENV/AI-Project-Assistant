import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  RowComponent,
  FormSelectDirective
} from '@coreui/angular';

@Component({
  selector: 'app-add-meeting',

  imports: [
    RouterLink,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    RowComponent,
    FormControlDirective,
    FormSelectDirective
  ],

  templateUrl: './add-meeting.component.html',
  styleUrl: './add-meeting.component.scss'
})
export class AddMeetingComponent {

}