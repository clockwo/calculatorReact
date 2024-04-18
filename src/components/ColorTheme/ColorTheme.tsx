import { useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ColorThemeProps } from './Color.props';

const ColorTheme = ({ children }: ColorThemeProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ColorTheme;
