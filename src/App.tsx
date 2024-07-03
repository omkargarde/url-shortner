import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import AuthPage from "./pages/AuthPage";
import DashBoardPage from "./pages/DashBoardPage";
import LandingPage from "./pages/LandingPage";
import LinkPage from "./pages/LinkPage";
import RedirectLinkPage from "./pages/RedirectLinkPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
        {
          path: "/dashboard",
          element: <DashBoardPage />,
        },
        {
          path: "/link/:id",
          element: <LinkPage />,
        },
        {
          path: "/:id",
          element: <RedirectLinkPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
