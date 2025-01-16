const RightSidebar = () => {
  return (
    <div className="relative w-full sm:w-3/4 md:w-full">
      <h2 className="text-lg sm:text-md font-bold mb-3 sm:mb-4">Actions</h2>

      <button className="w-full py-1.5 sm:py-2 px-3 sm:px-4 bg-green-600 text-sm sm:text-base text-white rounded hover:bg-green-700">
        Export Data
      </button>

      <button className="w-full mt-2 py-1.5 sm:py-2 px-3 sm:px-4 border border-green-700 text-sm sm:text-base rounded hover:bg-grey-20">
        Settings
      </button>
    </div>
  );
};

export default RightSidebar;
