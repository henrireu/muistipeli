import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Lippupeli from './lippupeli';
import Muistipelit from './muistipelit';
import Koirapeli from './koirapeli';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "muistipelit",
    element: <Muistipelit />,
    children: [
      { index: true, element: <Lippupeli />},
      { path: "lippupeli", element: <Lippupeli />},
      { path: "koirapeli", element: <Koirapeli />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


