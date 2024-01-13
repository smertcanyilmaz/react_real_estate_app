import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFilter } from "../../Context/FilterContext";
const AuthEntranceSide = () => {
  const [transition, setTransition] = useState(false);
  const { setStatus } = useContext(ContextFilter);
  const navigate = useNavigate();

  useEffect(() => {
    setTransition(true);
  }, []);

  const logoClickHandler = () => {
    setStatus("");
    navigate("/");
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="bg-gray-900 text-gray-200 flex-1 h-40 md:h-screen flex flex-col items-center overflow-hidden ">
      <div
        className={`flex-1 w-full flex items-end justify-center tranform-translate cursor-pointer  ${
          transition ? "opacity-100 " : "opacity-0"
        } duration-[800ms]`}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 65 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={logoClickHandler}
        >
          <path
            d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
            fill="rgb(229 231 235)"
          />
        </svg>
      </div>
      <div
        className={`hidden flex-1 w-full md:flex items-end justify-center tranform-translate  ${
          transition ? "-translate-y-0  " : "translate-y-full"
        } duration-[1800ms]`}
      >
        <img
          src="images\house2.png"
          alt=""
          className="h-[36vh] w-full mx-auto object-cover"
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`w-20 h-20 delay-200 z-50 absolute ${
          imageLoaded ? "bg-emerald-500" : "bg-red-500"
        }`}
      >
        {imageLoaded ? "resim yüklendi" : "resim yükleniyor"}
      </div>
    </div>
  );
};

export default AuthEntranceSide;
