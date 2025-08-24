import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from './components/AuthPage.jsx';
import HomePage from './components/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <AuthPage /> }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
