import { Component } from '@angular/core';
import userMenu from '../../../assets/JsonData/user_menus.json';
import notification from '../../../assets/JsonData/notification.json';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})

export class TopnavComponent {

  public notifications :any = notification;

  public user_menu : any = userMenu;

  public curr_user : {display_name: string, image: string} = {
    display_name: 'GVD',
    image: 'https://wallpaperaccess.com/full/3225763.jpg',
  }

  constructor(){}
}
