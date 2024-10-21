import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AuthProvider>
   <div className ="dark:bg-slate900 dark:text-white">
   <App />
   </div>
   </AuthProvider>
   </BrowserRouter>
    
  
);
