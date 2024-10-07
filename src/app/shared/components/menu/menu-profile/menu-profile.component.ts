import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrl: './menu-profile.component.scss'
})
export class MenuProfileComponent {
  @Input({ required: true }) profileName: string = '';
  @Input() image: string = '';
}
