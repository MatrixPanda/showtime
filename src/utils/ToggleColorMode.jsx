import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Context lets components pass information deep down without explicitly passing props. Refer to React Docs
export const ColorModeContext = createContext();

// NOTE: children is a default prop that you always get with react components
const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // only change when mode changes (hover it to see function explanation)
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  // Provider is a built in component when you create a new context
  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
