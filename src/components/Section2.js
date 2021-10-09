import Timeline from "./Timeline.js";

const Section2 = () => {
  return (
    <div
      id="Section2"
      className="relative z-30 min-h-screen w-full rounded-full font-nuku text-4xl"
    >
      <div className="py-16">
        <Timeline />
        <div className="mx-auto flex flex-col xl:flex-row justify-center items-center">
          <button
            className="w-60 h-24 sm:w-96 sm:h-32 my-3 sm:my-8 mx-10 sm:text-fiftysix uppercase"
            style={{
              backgroundImage: "url('/images/button.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            onClick={() => window.open('#','_blank')}
          >
            DAFTAR
          </button>
          <button
            className="w-60 h-24 sm:w-96 sm:h-32 my-3 sm:my-8 mx-10 sm:text-fiftysix uppercase"
            style={{
              backgroundImage: "url('/images/button.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            onClick={() => window.open('#','_blank')}
          >
            GUIDEBOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
