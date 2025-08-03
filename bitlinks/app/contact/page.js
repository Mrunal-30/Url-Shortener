"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-Poppins-ExtraBold",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedback.trim()) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    });

    if (res.ok) {
      setSubmitted(true);
      setFeedback("");
    } else {
      console.error("Error submitting feedback");
    }
  };

  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center p-8">
      <section className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl w-full flex flex-col gap-6">
        <h1 className={`text-4xl font-bold text-purple-700 ${poppins.className}`}>
          We Value Your Feedback
        </h1>
        <p className="text-lg text-gray-700">
          Let us know what you think about our URL shortener. Your feedback helps us improve!
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <textarea
            rows="6"
            placeholder="Write your feedback here..."
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Submit Feedback
          </button>
        </form>

        {submitted && (
          <div className="mt-6 text-sm text-center text-green-600 font-semibold">
            Thank you! Your feedback was submitted.
          </div>
        )}
      </section>
    </main>
  );
}
