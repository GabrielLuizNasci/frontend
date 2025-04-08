import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, createSystem, defineConfig, } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        P1: { value: "#000000" },
        P2: { value: "#ffd700" },
        S4: { value: "#EE0F0F" },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.S4}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
})

const system = createSystem(config)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);


