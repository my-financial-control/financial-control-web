import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuLogoComponent } from './menu/menu-logo/menu-logo.component';
import { LogoutButtonComponent } from './menu/logout-button/logout-button.component';
import { MenuProfileComponent } from './menu/menu-profile/menu-profile.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuLogoComponent,
    LogoutButtonComponent,
    MenuProfileComponent,
    HeaderComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
