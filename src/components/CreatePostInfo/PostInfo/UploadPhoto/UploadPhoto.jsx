import React from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";

const UploadPhoto = () => {
  return (
    <div className="three form_box">
      <h1 className="text-lg font-semibold text-gray-800 mb-5">Ad Photos</h1>
      <div className="flex gap-5">
        <div className="w-36 h-24 rounded-[4px] border border-gray-400/50 flex flex-col items-center justify-center gap-2 shadow-sm">
          <PhotoCameraIcon
            fontSize="large"
            style={{ color: "rgb(55 65 81)" }}
          />
          <h3 className="text-sm text-gray-700 font-semibold">Upload Photo</h3>
        </div>
        {/* başlangıç ekleme divi */}
        <div className="w-36 h-24 rounded-[4px] border border-gray-400/50 flex flex-col items-center justify-center gap-2 shadow-sm ">
          <div className="p-[6px] flex items-center justify-center rounded-full bg-gray-200">
            <AddIcon />
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600/90 mt-5">
        You need to upload at least 5 photos.
      </p>
    </div>
  );
};

export default UploadPhoto;
