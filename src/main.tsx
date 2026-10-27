import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './styles.css';

const root = document.getElementById('root');

if (root) {
  const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1000;
  window.setTimeout(() => createRoot(root).render(<App />), delay);
}
