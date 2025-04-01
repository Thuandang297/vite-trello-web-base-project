import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import lightTheme from '~/theme/lightTheme'
import darkTheme from '~/theme/darkTheme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MUIThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
