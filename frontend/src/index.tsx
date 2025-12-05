import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.querySelector('#root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error('Root container not found');
}
