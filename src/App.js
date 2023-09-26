import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { usersData } from "./api/Api";
import Profile from "./components/Profile";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: usersData,
      },
      {
        path: "/user/:id",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
