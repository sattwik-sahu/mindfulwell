import { useState } from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes";
import Auth from "./routes/Auth";
import Awareness from "./routes/Awareness";
import ErrorNotFound from "./routes/ErrorNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorNotFound />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/awareness",
    element: <Awareness />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
