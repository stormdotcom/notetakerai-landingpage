const DashboardFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-3">
      <p>
        &copy; {new Date().getFullYear()} Quick Note AI ({import.meta.env.MODE}
        ). All Rights Reserved.
      </p>
    </footer>
  );
};

export default DashboardFooter;
