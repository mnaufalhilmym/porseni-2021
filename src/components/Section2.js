import Timeline from "./Timeline.js";

const Section2 = () => {
  return (
    <div
      id="Section2"
      className="relative z-30 pt-16 min-h-screen w-full rounded-full font-nuku text-4xl"
    >
      <img
        className="absolute right-0 transform scale-75 md:scale-100 sm:right-20 bottom-20 xl:top-16"
        src={`${process.env.PUBLIC_URL}/images/jejepangan-vertikal.svg`}
        alt="jejepangan vertikal"
      ></img>
      <Timeline />
      <div className="block z-40 text-fiftysix md:text-sixtyeit text-merah font-nuku justify-center w-full">
        <h2
          className="relative z-40 text-center cursor-default"
          style={{
            "-webkit-text-stroke": "1px #FBE5D2",
            "text-shadow": [
              "6px 6px 0 #FBE5D2",
              "6px 2px 0 #FBE5D2",
              "6px 3px 0 #FBE5D2",
              "6px 4px 0 #FBE5D2",
              "6px 5px 0 #FBE5D2",
              "-1px 6px 0 #FBE5D2",
              "0px 6px 0 #FBE5D2",
              "1px 6px 0 #FBE5D2",
              "2px 6px 0 #FBE5D2",
              "3px 6px 0 #FBE5D2",
              "4px 6px 0 #FBE5D2",
              "5px 6px 0 #FBE5D2",
            ],
          }}
        >
          PENGUMPULAN KARYA
        </h2>
        <div className="h-10 w-full"></div>
      </div>
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center">
        <button
          className="z-10 w-56 h-24 text-3xl sm:w-72 sm:h-32 my-3 sm:my-8 mx-10 sm:text-forty uppercase transform transition duration-300 hover:scale-110"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/button.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1_ljN1RuxX7jDI8GxS_wkYJPlTQWpJHJu?usp=sharing"
            )
          }
        >
          CABANG <br></br> OLAHRAGA
          <div className="h-2"></div>
        </button>
        <button
          className="z-10 w-56 h-24 text-3xl sm:w-72 sm:h-32 my-3 sm:my-8 mx-10 sm:text-forty uppercase transform transition duration-300 hover:scale-110"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/button.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1KnE-BgbKC6WHKF73ktBtGmeUTm46dXB1?usp=sharing"
            )
          }
        >
          CABANG <br></br> SENI
          <div className="h-1"></div>
        </button>
      </div>
      <img
        className="relative z-0 xl:ml-auto -mt-80 w-96 xl:w-max"
        src={`${process.env.PUBLIC_URL}/images/figur-cs.svg`}
        alt="figur"
      ></img>
    </div>
  );
};

export default Section2;
