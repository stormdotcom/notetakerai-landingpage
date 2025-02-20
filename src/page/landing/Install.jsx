import {
  faAndroid,
  faChrome,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Install = () => {
  const installOptions = [
    {
      name: "Google Chrome",
      icon: faChrome,
      color: "text-blue-500",
      description: "Get the QNotes AI extension for Chrome.",
      link: "https://chrome.google.com/webstore",
      available: true,
    },
    {
      name: "Mozilla Firefox",
      icon: faFirefoxBrowser,
      color: "text-orange-500",
      description: "Download QNotes AI for Mozilla Firefox.",
      link: "https://addons.mozilla.org/en-US/firefox/",
      available: true,
    },
    {
      name: "Android (Coming Soon)",
      icon: faAndroid,
      color: "text-green-500",
      description: "Stay tuned for the Android app launch.",
      link: "#",
      available: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-green-400">
          Install QNotes AI
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Choose your preferred platform to install QNotes AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {installOptions.map((option, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg bg-gray-800 border border-gray-700 flex flex-col items-center justify-center text-center transition transform hover:-translate-y-2 ${
                !option.available ? "opacity-50" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={option.icon}
                className={`${option.color} text-5xl mb-4`}
              />

              <h3 className="text-xl font-bold">{option.name}</h3>

              <p className="text-gray-300 mt-2">{option.description}</p>

              {option.available ? (
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-medium transition-all duration-300"
                >
                  Install Now 🚀
                </a>
              ) : (
                <span className="mt-4 px-6 py-3 bg-gray-600 text-gray-400 rounded-lg text-lg font-medium cursor-not-allowed">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Install;
