import Timeline from "./Timeline.js";

const Section2 = () => {
  return (
    <div
      id="Section2"
      className="relative z-30 pt-16 min-h-screen w-full rounded-full font-nuku text-4xl"
    >
      <img
        className="absolute right-0 transform scale-75 md:scale-100 sm:right-20 bottom-20 xl:top-16"
        src="/images/jejepangan-vertikal.svg"
        alt="jejepangan vertikal"
      ></img>
      <Timeline />
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center">
        <button
          className="z-10 w-56 h-24 sm:w-96 sm:h-32 my-3 sm:my-8 mx-10 sm:text-5xl uppercase transform transition duration-300 hover:scale-110"
          style={{
            backgroundImage: "url('/images/button.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => window.open("#", "_blank")}
        >
          DAFTAR
        </button>
        <button
          className="z-10 w-56 h-24 sm:w-96 sm:h-32 my-3 sm:my-8 mx-10 sm:text-5xl uppercase transform transition duration-300 hover:scale-110"
          style={{
            backgroundImage: "url('/images/button.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() => window.open("#", "_blank")}
        >
          GUIDEBOOK
        </button>
      </div>
      <img
        className="relative xl:ml-auto -mt-80 w-96 xl:w-max"
        src="/images/figur-cs.svg"
        alt="figur"
      ></img>
    </div>
  );
};

export default Section2;
