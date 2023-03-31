import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
    <ColorModeScript />
  </StrictMode>
);