import React, { Component } from "react";
import ProfileUI from "./ProfileUI";
class Profile extends Component {
  state = { imgsrc: "https://randomuser.me/api/portraits/women/37.jpg" };
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <ProfileUI></ProfileUI>
          </div>
          <div className="col-md-4">
            <ProfileUI></ProfileUI>
          </div>
          <div className="col-md-4">
            <ProfileUI></ProfileUI>
          </div>
        </div>
        <ProfileUI></ProfileUI>
      </div>
    );
  }
}

export default Profile;
