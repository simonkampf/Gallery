import React from "react";

const ProfileUI = props => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={props.imgsrc} alt="Image 1" className="profile-image"></img>
      </div>
      <div className="profile-body-text">
        <h4 className="profile_name"> Simon Kampf</h4>
        <p className="profile_description">Detta är profile description</p>
      </div>
    </div>
  );
};

export default ProfileUI;
