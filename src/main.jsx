import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './library.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
