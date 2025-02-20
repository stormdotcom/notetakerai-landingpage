import workingModelImage from "@/assets/images/working-model.png";
const WorkingModel = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-green-400">
          How QNotes Works
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          QNotes AI uses <span className="text-green-400">Multi-Model LLM</span>{" "}
          (Large Language Models) to accurately transcribe, summarize, and
          generate actionable insights from meetings and sessions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Step 1: Audio Capture */}
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-xl font-bold text-green-400">
              1. Audio Capture
            </h3>
            <p className="text-gray-300 mt-2">
              QNotes records meeting audio and converts audio into text with
              high accuracy.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-xl font-bold text-green-400">
              2. AI Processing
            </h3>
            <p className="text-gray-300 mt-2">
              Multi-Model LLMs analyze the transcript, detect key topics, and
              extract summaries.
            </p>
          </div>

          {/* Step 3: Actionable Insights */}
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-xl font-bold text-green-400">
              3. Actionable Insights
            </h3>
            <p className="text-gray-300 mt-2">
              Generates structured notes, to-do lists, and decisions for easy
              follow-up.
            </p>
          </div>
        </div>

        {/* PNG Representation */}
        <div className="mt-12">
          <img
            src={workingModelImage}
            alt="QNotes AI Process"
            className="mx-auto w-full md:w-2/3 rounded-lg shadow-xl"
          />
          <p className="text-gray-400 mt-4 text-sm">
            *Illustration of QNotes AI using Multi-Model LLM for transcription &
            summarization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingModel;
