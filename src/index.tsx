import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import { App } from './app';
import categories from './mock.json';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
