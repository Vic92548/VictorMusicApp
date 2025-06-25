import 'next-themes';

declare module 'next-themes' {
  interface ThemeProviderProps {
    children: React.ReactNode;
    /**
     * Default theme to use when a user visits the site for the first time
     */
    defaultTheme?: string;
    /**
     * Key used to store the theme in localStorage
     * @default 'theme'
     */
    storageKey?: string;
    /**
     * Whether to enable system theme detection
     * @default true
     */
    enableSystem?: boolean;
    /**
     * Whether to disable all CSS transitions when switching themes
     * @default false
     */
    disableTransitionOnChange?: boolean;
    /**
     * HTML attribute modified based on the active theme
     * @default 'class'
     */
    attribute?: string | 'class' | 'data-theme';
    /**
     * Value of the data attribute when dark mode is active
     * @default 'dark'
     */
    value?: { [key: string]: string } | 'light' | 'dark' | 'system';
  }
}
