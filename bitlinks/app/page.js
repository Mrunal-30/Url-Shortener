import Image from "next/image";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-Poppins-ExtraBold",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortner In The Market
          </p>
          <p className="px-26 text-center">
            We are the most straightfoward URL Shortener in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </p>
          <div></div>
          <div className="flex gap-3 justify-start">
            <Link href="/shorten">
              <button className="cursor-pointer bg-purple-500  rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                Try Now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="Vector Image"
            src={"/vector.jpg"}
            fill={true}
          ></Image>
        </div>
      </section>
    </main>
  );
}
