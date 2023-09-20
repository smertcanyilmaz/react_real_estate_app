import Button from "../Button/Button";

const Navbar = ({ ref0 }) => {
  return (
    // <div className="flex max-w-6xl max-h-[12vh] mx-auto justify-between fixed right-0 left-0 top-0 pt-12 z-50 items-center ">
    <div
      ref={ref0}
      className="flex w-full h-[10vh] mx-auto justify-between items-center pt-10"
    >
      <svg
        width="65"
        height="40"
        viewBox="0 0 65 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
          fill="#091638"
        />
      </svg>
      <ul className="flex gap-10">
        <li>Top offers</li>
        <li>Search in offers</li>
        <li>References</li>
        <li>About us</li>
        <li>Our team</li>
      </ul>
      <div>
        <Button>Contact us</Button>
      </div>
    </div>
  );
};

export default Navbar;
