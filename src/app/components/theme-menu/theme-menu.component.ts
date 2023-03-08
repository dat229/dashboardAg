import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-menu',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.scss']
})
export class ThemeMenuComponent {

  public mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
  ]

  public color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
  ]

  setActiveMenu(theme_menu:any){
    theme_menu.classList.add('active');
  }

  closeMenu(theme_menu:any){
    theme_menu.classList.remove('active');
  }

  constructor(){}
}
