
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

