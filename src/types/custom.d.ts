// This file contains type declarations for your custom components
declare module '@/components/ui/theme-provider' {
  import * as React from 'react';

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

declare module '@/components/ui/main-nav' {
  import * as React from 'react';
  const MainNav: React.FC;
  export default MainNav;
}
