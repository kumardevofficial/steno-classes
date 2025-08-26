import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from './components/AuthPage.jsx';
import HomePage from './components/HomePage.jsx';
// import CoursePage from './components/Pages/Course/Course.jsx';
import AskDoubt from './components/Pages/AskDoubt/AskDoubt.jsx';
import CurrentAffairs from './components/Pages/CurrentAffairs/CurrentAffairs.jsx';
import LatestVacancy from './components/Pages/LatestVacancy/LatestVacancy.jsx';
import Practice from './components/Pages/Practice/Practice.jsx';
import StudyMaterials from './components/Pages/StudyMaterials/StudyMaterials.jsx';
import TestSeries from './components/Pages/TestSeries/TestSeries.jsx';
import Courses from './components/Pages/Course/Course.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <AuthPage /> },
      {path: "courses", element: <Courses/>},
      {path:"askdoubt", element: <AskDoubt/> },
      {path:"current-affairs", element: <CurrentAffairs/> },
      {path:"latest-vacancy", element: <LatestVacancy/>},
      {path:"practice", element: <Practice/>},
      {path:"study-materials", element: <StudyMaterials/> },
      {path:"test-series", element: <TestSeries/> },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
