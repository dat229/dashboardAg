import { createAction,props } from "@ngrx/store";

export const ChangeThemeMode = createAction(
  "[Theme] ChangeThemeMode",
  props<{ themeMode : string }>()
);

export const ChangeThemeColor = createAction(
  "[Theme] ChangeThemeColor",
  props<{ themeColor : string }>()
);
