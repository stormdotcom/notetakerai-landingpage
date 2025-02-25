/* eslint-disable react/prop-types */
const EditorActions = ({ onSave, onBack }) => {
  return (
    <div className="w-full flex justify-end mt-4">
      <div className="space-x-4">
        {/* Back Button - Green Outline */}
        <button
          onClick={onBack}
          className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
        >
          Back
        </button>

        {/* Save Button - Solid Green */}
        <button
          onClick={onSave}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditorActions;
