import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import Accordion from "../components/Accordion";

const LandingPage = () => {
  const [longURL, setLongURL] = useState<string>();
  const navigate = useNavigate();

  const handleShorten = (e: FormEvent) => {
    e.preventDefault();
    if (longURL) navigate(`/auth?createNew=${longURL}`);
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/hero-image.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-pretty text-center text-6xl font-extrabold sm:text-6xl md:text-5xl">
              The only <span className="text-accent">URL Shortener</span> you
              will ever need
            </h1>
            <form
              className="flex flex-col items-center"
              onSubmit={(e) => {
                handleShorten(e);
              }}
            >
              <input
                type="url"
                placeholder="Enter your URL"
                className="max-w-1xl input input-bordered input-secondary mb-2 w-full max-w-xl"
                value={longURL}
                onChange={(e) => {
                  setLongURL(e.target.value);
                }}
              />
              <button className="btn btn-primary btn-sm btn-wide text-xl tracking-wider sm:btn-lg sm:text-2xl">
                Shorten
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </div>
      {/* TODO: fix jitter issue when selecting another accordion */}
      <Accordion />
    </>
  );
};

export default LandingPage;
