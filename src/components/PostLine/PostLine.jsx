import React from "react";
import "./PostLine.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

const PostLine = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="icon_containers">
          <div className="post_icon_borders">
            <EditRoundedIcon />
          </div>
          <p>Ad Informations</p>
        </div>
        <div className="lines">{/*line*/}</div>
        <div className="icon_containers">
          <div className="post_icon_borders">
            <RemoveRedEyeRoundedIcon />
          </div>
          <p>Preview</p>
        </div>
        <div className="lines">{/*line*/}</div>
        <div className="icon_containers">
          <div className="post_icon_borders">
            <SaveRoundedIcon />
          </div>
          <p>Post Ad</p>
        </div>
      </div>
    </div>
  );
};

export default PostLine;
