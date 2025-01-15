import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const PermittedRoutes = () => {
  return (
    <div>
      <RouterProvider router={createHashRouter(routes)} />
      <Outlet />
    </div>
  );
};

export default PermittedRoutes;
