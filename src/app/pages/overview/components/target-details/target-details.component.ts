import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrl: './target-details.component.scss'
})
export class TargetDetailsComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) value: string = '';
}
