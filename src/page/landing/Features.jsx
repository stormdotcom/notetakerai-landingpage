import {
  faChartLine,
  faCheckCircle,
  faClipboardList,
  faFileAlt,
  faGlobe,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
  const features = [
    {
      title: "Hassle-Free Summarization",
      description: "Automatically transcribe and summarize meetings with our AI-powered browser extension.",
      icon: <FontAwesomeIcon icon={faClipboardList} className="text-green-500 text-4xl" />,
    },
    {
      title: "Comprehensive Dashboard",
      description: "Access all your meeting summaries, insights, and action items in one intuitive dashboard.",
      icon: <FontAwesomeIcon icon={faChartLine} className="text-green-500 text-4xl" />,
    },
    {
      title: "Meeting-Based Console",
      description: "Manage notes session-wise with a console designed for structured analysis.",
      icon: <FontAwesomeIcon icon={faGlobe} className="text-green-500 text-4xl" />,
    },
    {
      title: "Built-in Text Editor",
      description: "Refine and organize your meeting notes seamlessly with an integrated editor.",
      icon: <FontAwesomeIcon icon={faFileAlt} className="text-green-500 text-4xl" />,
    },
    {
      title: "Actionable To-Do Lists",
      description: "Convert discussions into actionable tasks and track progress effortlessly.",
      icon: <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl" />,
    },
    {
      title: "Seamless Sharing",
      description: "Easily share meeting notes via email or download them as a file.",
      icon: <FontAwesomeIcon icon={faShareAlt} className="text-green-400 text-4xl" />,
    },
    
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Enhance Your Meetings with Smart Features</h2>
        <p className="text-lg text-gray-300 mb-12">
          AI-driven tools to streamline note-taking, summarize key points, and boost productivity.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
