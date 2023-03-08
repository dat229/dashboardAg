import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { initialThemeState } from './redux/reducers/theme.reducer';
import { selectThemeColor } from './redux/selectors/theme.selector';
import { Storage } from './redux/storageService/storage.service';
import { ThemeState } from './redux/theme.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  data: ThemeState = new ThemeState();

  constructor(
    private storage : Storage
  ){};

  ngOnInit(): void {
    this.data.themeColor="theme-mode-light";
    this.data.themeMode="theme-mode-light";
    this.storage.setItem("data", this.data)
  }

}
