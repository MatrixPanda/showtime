import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';

// const theme = createTheme({}); in ToggleColorModeProvider now

// Entire app knows what is the current mode of the application by wrapping it in ToggleColorModeProvider
ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> Have this in ToggleColorModeProvider now */}
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById('root'),
);
