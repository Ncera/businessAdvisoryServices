import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  clients = [
    {
      imageSrc: '../../assets/Friendz.png', p: 'Put the client first' 
    }
  ]
}
