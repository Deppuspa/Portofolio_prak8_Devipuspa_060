import email from "../assets/email.png";
import ig from "../assets/ig.png";
import github from "../assets/github.png";
import pc1Image from "../assets/pc1.png";

export default function Home() {
  return (
    <section className="bg-rose-200 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                <line x1="0" y1="10px" x2="10px" y2="10px" />
              </svg>
              <h2 className="uppercase text-sm md:text-xl font-extralight tracking-[0.4em] ml-2">
                My Name is
              </h2>
            </div>

            <h3 className="font-bold text-3xl md:text-4xl text-rose-600">
              <span>Devi Puspa</span>
              <span className="text-rose-400"> Rosalinda</span>
            </h3>

            <p className="font-light text-rose-800 max-w-md mx-auto md:mx-0">
              I mix creativity, curiosity, and caffeine to build data-driven
              designs that feel alive. Always experimenting, always learning.
              Because innovation never sits still.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="mailto:deprosalinda@gmail.com">
                <img src={email} alt="email" className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/06.vvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ig} alt="instagram" className="w-7 h-6" />
              </a>

              <a
                href="https://github.com/Deppuspa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={pc1Image}
              alt="Profile Illustration"
              className="w-64 md:w-80 lg:w-96 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
