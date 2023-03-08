import { createReducer, on } from '@ngrx/store';
import { ThemeState } from '../theme.state';
import * as ThemeAction from '../actions/theme.action';
import { Action } from 'rxjs/internal/scheduler/Action';

export const initialThemeState : ThemeState = {
  themeMode : "theme-mode-light",
  themeColor : "theme-color-blue",
}

// export function ThemeReducer(state: ThemeState = initialThemeState, action : any){
//   console.log(state)
// }

export const ThemeReducer = createReducer(
  initialThemeState,
  on(ThemeAction.ChangeThemeColor, (state, payload) => ({...state, themeColor : payload.themeColor })),
  on(ThemeAction.ChangeThemeMode, (state, payload) => ({...state, themeMode: payload.themeMode}))
)
