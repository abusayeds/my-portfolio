import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./main/Main";

import Login from "./component/login/Login";
import Home from "./component/home/Home";
import ProjectDetails from "./component/projects/ProjectDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/project-details/:projectId",
          element: <ProjectDetails />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
