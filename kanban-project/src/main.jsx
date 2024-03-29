import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './contexts/user.jsx'
import { TaskProvider } from './contexts/tasks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <TaskProvider>
        <App />
        </TaskProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
)
