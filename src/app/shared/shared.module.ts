import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuLogoComponent } from './components/menu/menu-logo/menu-logo.component';
import { LogoutButtonComponent } from './components/menu/logout-button/logout-button.component';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
  ]
})
export class SharedModule { }
