import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './style.css';

(document.documentElement as HTMLElement).setAttribute('data-theme',
localStorage.getItem('co_theme') || 'light');

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRoutes/>);