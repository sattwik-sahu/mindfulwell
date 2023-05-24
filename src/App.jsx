import { useState } from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes";
import Auth from "./routes/Auth";
import Awareness from "./routes/Awareness";
import ErrorNotFound from "./routes/ErrorNotFound";
import Header from "./components/layout/Header";

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
      <Header></Header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
};

export default App;
