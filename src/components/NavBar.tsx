import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";

import tcurve from "../assets/tcurve.png";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async () => {
    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScc8DVd5It0lpEdErODSywXmxpzCb4fe2GqPAipCcKV4qQtrg/formResponse";

    const formData = new FormData();

    formData.append("entry.1132720780", email);
    formData.append("entry.2013209418", suggestion);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Prevents CORS issues
      });

      setEmail("");
      setSuggestion("");
      setIsModalOpen(false); // Close modal after submission
    } catch (error) {
      console.error("Error submitting suggestion:", error);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-6 w-6 mr-2" src={tcurve} alt="Logo" />
              <span className="text-xl tracking-tight font-bold">Tochi DB</span>
            </div>
            <ul className="hidden lg:flex ml-30 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-4 items-center">
              <button
                onClick={toggleModal}
                className="py-2 px-3 border rounded-md"
              >
                Suggestion
              </button>
              <a
                href="#download"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Download
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <button
                  onClick={toggleModal}
                  className="py-2 px-3 border rounded-md"
                >
                  Suggestion
                </button>
                <a
                  href="#download"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                >
                  Download
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal for Suggestion */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
          <div className="bg-black p-8 rounded-2xl shadow-xl w-[28rem] flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Help us build Tochi for the future! 🚀
            </h2>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-4 text-lg border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your suggestion"
              className="w-full p-4 text-lg border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="px-6 py-3 text-lg bg-gray-600 rounded-xl hover:bg-gray-400"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 text-lg bg-green-500 text-white rounded-xl hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
