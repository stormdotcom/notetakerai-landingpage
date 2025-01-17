import { Outlet } from "react-router-dom";

const SessionLayout = () => {
  return (
    <div className="flex flex-grow">
      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-4 bg-white">
          <Outlet />  {/* This will render <Middle /> */}
        </main>
      </div>
    </div>
  );
};

export default SessionLayout;
