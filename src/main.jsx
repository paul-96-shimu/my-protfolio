import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home.jsx';
import MainLayOuts from './Components/Layouts/MainLayOuts.jsx';
import Abouts from './Components/Abouts.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Layouts/Education.jsx';

import Project from './Components/Layouts/Project.jsx';
import Contact from './Components/Layouts/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,

    children: [
      {
        index: true,
        Component: Home

      },
      {
        path: "about",
        Component: Abouts
      },
      {
        path: "skills",
        Component: Skills
      },
      {
        path: "education",
        Component: Education
      },

      {
        path: "projects",
        Component: Project
      },
      {
        path: "contact",
        Component: Contact
      },

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
