import { useEffect, useState } from "react";

const quotes = [
  {
    text: "It’s late, pal, time to call it a day.",
    author: "Plato",
  },
  {
    text: "Thinking, the talking of the soul with itself.",
    author: "Plato",
  },
  {
    text: "Time is what we want most, but what we use worst.",
    author: "William Penn",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "In the end, we only regret the chances we didn't take.",
    author: "Lewis Carroll",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "To be, or not to be, that is the question.",
    author: "William Shakespeare",
  },
  {
    text: "Don’t cry because it’s over, smile because it happened.",
    author: "Dr. Seuss",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  useEffect(() => {
    getRandomQuote();

    const interval = setInterval(() => {
      getRandomQuote();
    }, 14400000); // Change every 4 hours (14400000 ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{quote.text}</h1>
        <p className="text-sm text-gray-500">- {quote.author}</p>{" "}
        {/* Display the author */}
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
