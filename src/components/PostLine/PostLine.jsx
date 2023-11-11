import React from "react";
import "./PostLine.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

const PostLine = ({ custom }) => {
  //const componentStyle = custom === "preview" && "rgb(249 250 251)";
  const componentStyle = (page) => {
    return custom === page && "rgb(249 250 251)";
  };

  return (
    <div className="w-full ">
      <div className="flex items-center justify-center gap-12">
        <div
          className={`icon_containers ${
            !componentStyle("adInfo") && "opacity-40"
          }`}
        >
          <div
            className={`post_icon_borders  ${
              componentStyle("adInfo") && "bg-gray-800"
            } `}
          >
            <EditRoundedIcon style={{ color: componentStyle("adInfo") }} />
          </div>
          <p>Ad Informations</p>
        </div>
        <div className="lines">{/*line*/}</div>
        <div
          className={`icon_containers ${
            !componentStyle("preview") && "opacity-40"
          }`}
        >
          <div
            className={`post_icon_borders ${
              componentStyle("preview") && "bg-gray-800"
            } `}
          >
            <RemoveRedEyeRoundedIcon
              style={{ color: componentStyle("preview") }}
            />
          </div>
          <p>Preview</p>
        </div>
        {/* <div className="lines"></div> */}
        {/* <div className="icon_containers">
          <div className="post_icon_borders">
            <SaveRoundedIcon />
          </div>
          <p>Post Ad</p>
        </div> */}
      </div>
    </div>
  );
};

export default PostLine;
