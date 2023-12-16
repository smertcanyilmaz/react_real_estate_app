import React, { useContext } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { PostContext } from "../../../../Context/CreatePostContext";

const UploadPhoto = ({
  selectedFiles,
  setSelectedFiles,
  uploadImage,
  setUploadImage,
  setSumChecker,
}) => {
  const { setPreviewImages } = useContext(PostContext);

  const handleFileChange = (e) => {
    //client tarafında gözükecek resimlerin kodları
    const files = e.target.files;
    const selectedImages = selectedFiles ? [...selectedFiles] : [];

    for (let i = 0; i < files.length; i++) {
      selectedImages.push(URL.createObjectURL(files[i]));
    }
    setSelectedFiles(selectedImages);
    setPreviewImages(selectedImages);
    setSumChecker((prev) => ({ ...prev, images: selectedImages }));

    //firebase'e gidecek arrayin kodları
    uploadImage?.length === 0
      ? setUploadImage(e.target.files)
      : setUploadImage((prev) => [...prev, ...e.target.files]);
  };

  const removeImage = (index) => {
    //client tarafında gözüken resimlerden seçilen resmin silinmesi
    const removePrev = selectedFiles ? [...selectedFiles] : [];
    removePrev?.splice(index, 1);
    setSelectedFiles(removePrev);
    setSumChecker((prev) => ({ ...prev, images: removePrev }));

    //client tarafına gidecek olan arrayin içinden seçilen resmin silinmesi
    const removeImage = uploadImage?.filter((_, i) => i !== index);
    setUploadImage(removeImage);
  };

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
            multiple={true}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

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
        You need to upload at least 5 photos
        <span className="text-red-500">*</span>
      </p>
    </div>
  );
};

export default UploadPhoto;
