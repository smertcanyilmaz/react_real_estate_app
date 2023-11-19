//Bu sayfa kullanılmıyor ancak  alternatif bir slider olduğu için silmedim.

// import React, { useState } from "react";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ProductCard from "../../../ProductCard/ProductCard";

// const Slider = ({ sale, currentSlide }) => {
//   // const [currentSlide, setCurrentSlide] = useState(0);

//   // const prevSlide = () => {
//   //   setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1); //currentSlide - 1
//   // };

//   // const nextSlide = () => {
//   //   setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
//   // };
//   return (
//     <div className="flex flex-col gap-8 ">
//       <div className="flex gap-5 items-center">
//         {/* <div className=" flex w-full h-[3px] rounded-full bg-gray-300">
//           <div className="className=h-full bg-[--blue] w-1/5"></div>
//           <div
//             className=" h-full bg-[--blue]"
//             style={{
//               width: `${(currentSlide / 5) * 100}%`,
//             }}
//           ></div>
//         </div> */}
//         {/* <div className="flex gap-3 w-full items-center justify-end">
//           <div
//             onClick={prevSlide}
//             className="px-4 py-2 border border-gray-800  text-gray-800 rounded-xl flex justify-center items-center cursor-pointer "
//           >
//             <ArrowBackIosNewIcon />
//           </div>
//           <div
//             onClick={nextSlide}
//             className="px-4 py-2 border border-gray-800  text-gray-800 rounded-xl flex justify-center items-center cursor-pointer "
//           >
//             <ArrowForwardIosIcon />
//           </div>
//         </div> */}
//       </div>

//       <ProductCard currentSlide={currentSlide} sale={sale} />
//     </div>
//   );
// };

// export default Slider;
