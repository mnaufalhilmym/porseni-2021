import TimelineRight from "./Timeline/TimelineBoxRight";
import TimelineLeft from "./Timeline/TimelineBoxLeft";

const Timeline = () => {
  return (
    <div className="block z-40 text-7xl text-merah font-nuku justify-center w-full h-full mt-36">
      <h2
        className="text-center"
        style={{
          "-webkit-text-stroke": "1px #FBE5D2",
          "text-shadow": [
            "-3px -3px 0 #FBE5D2",
            "3px -3px 0 #FBE5D2",
            "-3px 3px 0 #FBE5D2",
            "3px 3px 0 #FBE5D2",
          ],
        }}
      >
        TIMELINE PENDAFTARAN
      </h2>

      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 my-20">
        <TimelineRight
          date="11 - 18 Oktober"
          title="Pendaftaran Manajer Cabang dan Kontingen"
        />
        <TimelineLeft date="17-23 Oktober" title="Technical meeting" />
        <TimelineRight
          date="22 - 26 Oktober"
          title="Susulan Perbaikan dan Kelengkapan Berkas "
        />
        <TimelineLeft date="17-23 Oktober" title="Opening Ceremony" />
      </div>
    </div>
  );
};

export default Timeline;
