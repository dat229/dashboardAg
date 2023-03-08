import { Component } from '@angular/core';
import { Location } from '@angular/common';
import SideBarRouter from '../../../assets/JsonData/sidebar_routes.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public imageLogo = "../../../assets/images/logo.png";
  public listLink = SideBarRouter;
  // public currentPath: string;

  constructor(private location: Location) {
    // this.currentPath = this.location.path();
    // if(this.currentPath === ''){
    //   this.currentPath = "/";
    // }
  }
}
