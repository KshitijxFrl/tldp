import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Use Tochi And
        </h1>
        <div className="flex justify-center items-center">
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Be 100x ", "Gain Control", "Build Fast"]}
            typeSpeed={110}
            backSpeed={100}
            loop
            style={{ color: "#24E500" }}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          An intelligent way for the fast paced mordern day backend systems
        </p>
      </div>
    </div>
  );
};

export default Hero;
