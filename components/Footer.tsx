import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center lg:max-w-[45vw]">
          Hi, I&apos;m a <span style={{ color: "#CBACF9" }}>new web developer</span>!
        </h1>
        <p className="text-lg text-center mt-4 text-gray-300 max-w-xl" style={{ color: "#C1C2D3" }}>
          I&apos;am currently studying and building my skills. Feel free to reach out if you&apos;d like to connect or collaborate!
        </p>
        <a href="mailto:mico.carillanes.stem@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;