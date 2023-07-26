import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  businesses = [
    {
      title: 'Business Advisory Services',
      description: 'Disaster recover planning, business continuity management, and disaster recovery.'
    },
  ];
}
