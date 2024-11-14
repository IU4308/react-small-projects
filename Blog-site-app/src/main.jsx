import React from "react";
import ReactDom from "react-dom/client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from "./Header.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
]); */

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router = {router} /> */}
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
