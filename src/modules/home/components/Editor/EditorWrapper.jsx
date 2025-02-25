/* eslint-disable react/prop-types */
const EditorWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow border border-gray-300 shadow-md bg-white max-h-full overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 rounded-lg min-w-full">
        <div>
          <p>QNotes Editor</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default EditorWrapper;
