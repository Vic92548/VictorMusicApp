import * as React from 'react';

declare module './theme-provider' {
  interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    storageKey?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    attribute?: 'class' | 'data-theme';
    value?: { [key: string]: string };
  }

  const ThemeProvider: React.FC<ThemeProviderProps>;
  export default ThemeProvider;
}
