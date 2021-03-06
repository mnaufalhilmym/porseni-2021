import TimelineRight from "./Timeline/TimelineBoxRight";
import TimelineLeft from "./Timeline/TimelineBoxLeft";

const Timeline = () => {
  return (
    <div className="block z-40 text-fiftysix md:text-7xl text-merah font-nuku justify-center w-full">
      <h2
        className="text-center cursor-default"
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
        <TimelineLeft date="30 Oktober" title="Opening Ceremony" />
      </div>
    </div>
  );
};

export default Timeline;
