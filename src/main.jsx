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

import StudyMaterials from './components/Pages/StudyMaterials/StudyMaterials.jsx';
import TestSeries from './components/Pages/TestSeries/TestSeries.jsx';
import Courses from './components/Pages/Course/Course.jsx';

import TypingPractice from './components/Pages/Practice/TypingPractice.jsx';
import EnglishPracticeList from './components/Pages/Practice/EnglishPracticeList.jsx';
import HindiPracticeList from './components/Pages/Practice/HindiPracticeList.jsx';
import TypingTest from './components/Pages/Practice/TypingTest.jsx';
// import TypingTest from './components/Pages/Practice/TypingTest.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <AuthPage /> },
      {path: "courses", element: <Courses/>},
      {path:"askdoubt", element: <AskDoubt/> },
      {path:"current-affairs", element: <CurrentAffairs/> },
      {path:"latest-vacancy", element: <LatestVacancy/>},
      {path:"practice", element: <TypingPractice/>},
      {path:"study-materials", element: <StudyMaterials/> },
      {path:"test-series", element: <TestSeries/> },
      {path: "hindi-typing", element: <HindiPracticeList/>},
      {path: "english-typing", element: <EnglishPracticeList/>},
      {path: "typing-test", element: <TypingTest/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
