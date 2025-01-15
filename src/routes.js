import HomeDashboard from "./modules/home/components/HomeDashboard";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "/dashboard",
        // element: <HomeDashboard />,
        protected: false,
      },
    ],
  },
];
export { routes };
