import React from "react";
import "./Profiles.css";

const Profiles = ({ profiles, loading }) => {
  if (loading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <section className="cards">
        {profiles.map(profile => (
          <article className="card" key={profiles.indexOf(profile)}>
            <h5 class="profile_title">
              {profile.name.title +
                " " +
                profile.name.first +
                " " +
                profile.name.last}
            </h5>

            <img
              src={profile.picture.large}
              alt="https://randomuser.me/api/portraits/lego/1.jpg"
            />
            <div class="profile_info">
              {"Date of birth: " + profile.dob["date"].substring(0, 10)}
              <br></br>
              {"Country: " + profile.location.country}
              <br></br>
              {"Email: " + profile.email}
              <br></br>
              {"Phone: " + profile.phone}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Profiles;
