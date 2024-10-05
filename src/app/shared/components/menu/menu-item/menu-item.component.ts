import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input({ required: true }) image: string = '';
  @Input({ required: true }) isSelected: boolean = false;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClickHandler(): void {
    this.click.emit();
  }
}
