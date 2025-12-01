'use client'
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('theme-orange');
  }, [theme, setTheme]);

  return (
    <>{children}</>
  )
}

export default ThemeWrapper