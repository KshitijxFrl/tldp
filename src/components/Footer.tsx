import tcurve from "../assets/tcurve.png";

const Footer = () => {
  return (
    <footer className="mt-20 py-5 border-t border-neutral-700">
      <div className="flex justify-between items-center py-2 px-10">
        <div className="flex items-center">
          <img src={tcurve} alt="Tochi Logo" className="w-8 h-8 mr-3" />
          <h2 className="text-2xl font-bold text-white">TOCHI</h2>
        </div>
        <p className="text-gray-400 font-bold">v 1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
