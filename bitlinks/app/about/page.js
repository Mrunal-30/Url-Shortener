import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-Poppins-ExtraBold",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center p-8">
      <section className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl w-full flex flex-col gap-6">
        <h1
          className={`text-4xl font-bold text-purple-700 ${poppins.className}`}
        >
          About Our URL Shortener
        </h1>
        <p className="text-lg text-gray-700">
          Welcome to our simple and secure URL shortener. We built this tool
          with one core principle in mind: **privacy-first and user-friendly**.
          Unlike other services that require logins, track user behavior, or
          bombard you with ads, we keep it clean, fast, and efficient.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're sharing links on social media, tracking marketing
          campaigns, or just want a neat URL to remember, our service is free to
          use and respects your anonymity.
        </p>
        <p className="text-lg text-gray-700">
          Behind the scenes, we use modern technologies like{" "}
          <strong>Next.js</strong>
          and <strong>Tailwind CSS</strong> to give you a seamless and
          responsive experience.
        </p>
        <div className="text-center mt-4">
          <p className="text-purple-600 font-semibold">
            Your privacy. Your links. Our promise.
          </p>
        </div>
      </section>
    </main>
  );
}
