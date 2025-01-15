const RightSidebar = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Actions</h2>
      <button className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">
        Export Data
      </button>
      <button className="w-full mt-2 py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700">
        Settings
      </button>
    </div>
  );
};

export default RightSidebar;
