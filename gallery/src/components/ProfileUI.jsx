import React from "react";

const ProfileUI = props => {
  return (
    <div classname="profile">
      <div classname="profile-image">
        <img src={props.imgsrc} alt="Image 1" classname="profile-image"></img>
      </div>
      <div classname="profile-body-text">
        <h4 className="profile_name"> Simon Kampf</h4>
        <p className="profile_description">Detta är profile description</p>
      </div>
    </div>
  );
};

export default ProfileUI;
