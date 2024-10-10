import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  image: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { title: 'Overview', image: 'assets/icons/overview.svg', isSelected: true },
    { title: 'Balances', image: 'assets/icons/wallet.svg', isSelected: false },
    { title: 'Transactions', image: 'assets/icons/transaction.svg', isSelected: false },
    { title: 'Bills', image: 'assets/icons/bill.svg', isSelected: false },
    { title: 'Expenses', image: 'assets/icons/expenses.svg', isSelected: false },
    { title: 'Goals', image: 'assets/icons/goal.svg', isSelected: false },
    { title: 'Settings', image: 'assets/icons/settings.svg', isSelected: false },
  ];

  onClickMenuItem(item: MenuItem) {
    this.menuItems.forEach((menuItem) => {
      if (menuItem === item) {
        menuItem.isSelected = true;
      } else {
        menuItem.isSelected = false;
      }
    });
  }
}
