import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home"
import VideosPage from './components/VideosPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import AboutPage from './components/Aboutpage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //children contains array of paths
    children: [
      {
        index: true, //jo path parent ka h, wahi aana chahie, here:home
        element: <Home />
      },
      {
        path: '/videos',
        element: <VideosPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)