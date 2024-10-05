import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuLogoComponent } from './components/menu/menu-logo/menu-logo.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuLogoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
