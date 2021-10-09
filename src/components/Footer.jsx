import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faTiktok,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="relative text-white overflow-hidden z-20">
      <div className="md:flex justify-evenly bg-red-500 pt-6 pb-12 md:px-8 px-6">
        <div className="md:w-120 words-wrap border-4 border-white px-4 py-2 rounded-3xl mb-4">
          <p className="text-base md:text-lg uppercase font-semibold">
            FORUM KOMUNIKASI UNIT KEGIATAN MAHASISWA UNIVERSITAS GADJAH MADA
          </p>
          <p className="text-base md:text-lg">
            Gelanggang Mahasiswa Universitas Gadjah Mada Jl. Pancasila No.1,
            Bulaksumur, Caturtunggal, Sleman, Daerah Istimewa Yogyakarta 55281
          </p>
        </div>
        <div className="flex justify-evenly">
          <div className="w-52">
            <div className="grid grid-cols-2 gap-2 md:px-8 py-4">
              <a
                className=" hover:text-yellow-500  rounded-xl w-12 h-12 text-4xl text-center pt-1"
                href="/"
                target="__blank"
              >
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>
              <a
                className="hover:text-yellow-500 rounded-xl w-12 h-12 text-4xl text-center pt-1"
                href="/"
                target="__blank"
              >
                <FontAwesomeIcon icon={faYoutube} />{" "}
              </a>
              <a
                className="hover:text-yellow-500 rounded-xl w-12 h-12 text-4xl text-center pt-1"
                href="/"
                target="__blank"
              >
                <FontAwesomeIcon icon={faLine} />{" "}
              </a>
              <a
                className="hover:text-yellow-500 rounded-xl w-12 h-12 text-4xl text-center pt-1"
                href="/"
                target="__blank"
              >
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </a>
              <a
                className="hover:text-yellow-500 rounded-xl w-12 h-12 text-4xl text-center pt-1"
                href="/"
                target="__blank"
              >
                <FontAwesomeIcon icon={faTiktok} />{" "}
              </a>
            </div>
          </div>
          <div className="w-max whitespace-nowrap md:mx-4 lg:mx-14 mx-0">
            <p className="text-lg font-semibold">Diselenggarakan oleh:</p>
            <div className="flex mt-4 space-x-4">
              <img
                className="md:w-32 md:h-32 w-20 h-20 object-contain"
                src={`${process.env.PUBLIC_URL}/images/lambang-ugm-putih.png`}
                alt="logo ugm"
              />
              <img
                className="md:w-32 md:h-32 w-20 h-20 object-contain"
                src={`${process.env.PUBLIC_URL}/images/logo-psg.png`}
                alt="logo porsenigama"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-8 bg-gray-900 w-screen px-4 py-1 font-semibold">
        <p> © Porsenigama 2021 </p>
      </div>
    </div>
  );
}
