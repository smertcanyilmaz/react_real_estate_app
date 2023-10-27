import React, { useRef, useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const UploadPhoto = ({
  selectedFiles,
  setSelectedFiles,
  uploadImage,
  setUploadImage,
}) => {
  //const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const selectedImages = [...selectedFiles]; // Mevcut resimleri kopyala
    setUploadImage(e.target.files[0]);

    for (let i = 0; i < files.length; i++) {
      selectedImages.push(URL.createObjectURL(files[i])); // Yeni resimleri ekle
    }

    setSelectedFiles(selectedImages); // Yeni resimleri ayarla
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedFiles];
    updatedImages.splice(index, 1);
    setSelectedFiles(updatedImages);
  };

  console.log("SELECTEDPHOTO", selectedFiles);
  return (
    <div className="three form_box">
      <h1 className="text-lg font-semibold text-gray-800 mb-5">Ad Photos</h1>
      <div className="flex flex-wrap gap-4">
        <div className="w-36 h-24 rounded-[4px] border border-gray-400/50 flex flex-col items-center justify-center gap-2 shadow-sm relative">
          <PhotoCameraIcon
            fontSize="large"
            style={{ color: "rgb(55 65 81)" }}
          />
          <h3 className="text-sm text-gray-700 font-semibold">Upload Photo</h3>
          <input
            type="file"
            className="opacity-0 absolute top-0 left-0 h-full w-full"
            //ref={fileInputRef}
            multiple={true}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {/* başlangıç ekleme divi */}

        {selectedFiles.length === 0 ? (
          <div className="w-36 h-24 rounded-[4px] border border-gray-400/50 flex flex-col items-center justify-center gap-2 shadow-sm ">
            <div className="p-[6px] flex items-center justify-center rounded-full bg-gray-200">
              <AddIcon />
            </div>
          </div>
        ) : (
          selectedFiles.map((photo, index) => (
            <div
              key={index}
              className="w-36 h-24 rounded-[4px] border border-gray-400/50 flex flex-col items-center justify-center gap-2 shadow-sm relative"
            >
              <div className="flex items-center justify-center rounded-full bg-gray-200">
                <img
                  key={index}
                  src={photo}
                  alt={`Image ${index}`}
                  className="w-36 h-24 object-cover"
                />
              </div>
              <div
                onClick={() => removeImage(index)}
                className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center absolute -top-1 -right-1"
              >
                <RemoveIcon fontSize="small" style={{ color: "white" }} />
              </div>
            </div>
          ))
        )}
      </div>
      <p className="text-sm text-gray-600/90 mt-5">
        You need to upload at least 5 photos.
      </p>
    </div>
  );
};

export default UploadPhoto;
