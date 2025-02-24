/* eslint-disable react/prop-types */
const LoadingOverlay = ({
  message = "Loading...",
  children,
  active = false,
}) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-3 text-gray-700 font-medium">{message}</p>

        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default LoadingOverlay;
