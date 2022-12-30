import styles from "../styles";
import { discount, robot,portfolio } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full relative left-30">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[90px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome to  <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> My Portfolio</span>{" "}
          </h1>
        </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={portfolio} alt="billing" className="w-[100%] h-[100%] relative left-45" />
      </div>
    </section>
  );
};

export default Hero;