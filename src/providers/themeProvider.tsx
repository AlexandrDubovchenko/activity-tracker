import { FC, PropsWithChildren, useState } from "react"

import { ThemeContext, ThemeVariants } from "@/context/themeContext"

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariants>('light')

  return <ThemeContext.Provider
    value={{
      theme,
      setTheme,
    }}
  >
    {children}
  </ThemeContext.Provider>
}