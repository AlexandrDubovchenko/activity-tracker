import { createContext, useContext } from "react";

export type ThemeVariants = 'dark' | 'light'

type ThemeContextState = {
  theme: ThemeVariants;
  setTheme: (theme: ThemeVariants) => void;
}

export const ThemeContext = createContext<ThemeContextState>({
  theme: 'light',
  setTheme: () => undefined,
})

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
