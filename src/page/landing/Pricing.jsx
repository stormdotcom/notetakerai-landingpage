const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "Free",
      description: "Get started with essential features.",
      features: [
        "5-minute session recordings",
        "Limited dashboard access",
        "Basic AI-powered transcription",
        "Access to recent 3 recordings",
        "No support",
      ],
      highlight: false,
    },
    {
      name: "Pro Plan",
      price: "₹500/month",
      description: "Unlock full power with premium features.",
      features: [
        "30 hours of session recordings per month",
        "Full dashboard access",
        "AI-powered transcription & summarization",
        "Download & export files",
        "Convert meeting insights into action items",
        "Priority support",
      ],
      highlight: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-green-400">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Select the plan that best suits your needs.
        </p>

        {/* Pricing Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition transform hover:-translate-y-2 ${
                plan.highlight
                  ? "border-2 border-green-500 shadow-2xl bg-gray-800"
                  : "border border-gray-700 bg-gray-800"
              } flex flex-col justify-between`}
            >
              <h3 className="text-2xl font-bold text-green-400">{plan.name}</h3>
              <p className="text-gray-300">{plan.description}</p>

              <p className="text-3xl font-semibold my-4 text-white">
                {plan.price}
              </p>

              <ul className="text-gray-300 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                  plan.highlight
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {plan.highlight ? "Upgrade to Pro 🚀" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
