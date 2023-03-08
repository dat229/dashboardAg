import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input('icon') iconDropdown : string = "";
  @Input('badge') badgeDropdown : string = "";
  @Input('curr_user') currUserDropdown : any;
  @Input('contentData') contentDropdown : any;
  @Input('renderItem') renderItemDropdown : any;
  @Input('renderFooter') renderFooterDropdown : any;

  constructor(){}

  showDropdown(dropdownToggle:any,dropdownContent:any){
    dropdownToggle.classList.toggle('active');
    dropdownContent.classList.toggle('active');
  }

}
