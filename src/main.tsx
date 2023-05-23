import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import { NotificationProvider } from './providers/notificationProvider.tsx'
import { ThemeProvider } from './providers/themeProvider.tsx'

import './assets/styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <ThemeProvider>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </NotificationProvider>
  </React.StrictMode>,
)
