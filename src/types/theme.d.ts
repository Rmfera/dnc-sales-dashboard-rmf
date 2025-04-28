/* eslint-disable @typescript-eslint/no-empty-object-type */
// src/styles/types/theme.d.ts

import 'styled-components';  // Importando para estender a tipagem do styled-components

export interface Theme {
  appBackground: string;
  appColor: string;
  appDefaultStroke: string;
  appLogo: string;
  appSkeletonFrom: string;
  appSkeletonTo: string;
  buttons: {
    alert: string;
    alertColor: string;
    alertHover: string;
    disabled: string;
    disabledColor: string;
    primary: string;
    primaryColor: string;
    primaryHover: string;
  };
  card: {
    alert: string;
    background: string;
    border: string;
    success: string;
    warning: string;
  };
  textInput: {
    active: string;
    activeColor: string;
    borderColor: string;
    disabled: string;
    disabledBorderColor: string;
    disabledColor: string;
    placeholderColor: string;
  };
  typographies: {
    error: string;
    subtitle: string;
    success: string;
  };
}

// Estende o DefaultTheme do styled-components para usar a interface Theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
