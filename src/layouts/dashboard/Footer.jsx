const DashboardFooter = () => {
  return (
    <footer className="bg-[#064e3b] text-gray-300 text-center py-2 text-xs sm:text-sm">
      <p>
        &copy; {new Date().getFullYear()} QNotes AI {import.meta.env.MODE !=="production" ? "(Development)" : ""} . All Rights Reserved.
      </p>
    </footer>
  );
};

export default DashboardFooter;
