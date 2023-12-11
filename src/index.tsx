import { createRoot } from 'react-dom/client';

import './index.scss';
import { App } from './app';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
