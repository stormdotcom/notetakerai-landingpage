/* eslint-disable react/prop-types */
const EditorWrapper = ({ children }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 min-h-[300px] max-h-[500px] overflow-y-auto shadow-md bg-white">
      {children}
    </div>
  );
};

export default EditorWrapper;
