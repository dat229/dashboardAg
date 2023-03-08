import { createSelector } from '@ngrx/store';
import { ThemeState } from '../theme.state';

export const selectThemeColor = (state : ThemeState) => state.themeColor;
