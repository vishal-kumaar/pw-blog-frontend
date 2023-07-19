import React from 'react'
import TopbarProvider from './topbar/TopbarProvider'

export default function Context({children}) {
  return (
    <TopbarProvider>
      {children}
    </TopbarProvider>
  )
}
