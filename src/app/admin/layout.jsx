import React from 'react'
import ThemeProvider from '@/components/adminPanel/ThemeProvider'

const layout =({children}) => {

  return (
    <ThemeProvider key="AdminPanelThemeProvider">
      {children}
    </ThemeProvider>
  )
}

export default layout