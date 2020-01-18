import React from "react";
import "./Profiles.css";

const Profiles = ({ profiles, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <h1>Secret Profiles</h1>
      <section className="cards">
        {profiles.map(profile => (
          <article className="card" key={profiles.indexOf(profile)}>
            {profile.name.title +
              " " +
              profile.name.first +
              " " +
              profile.name.last}

            <img
              src={profile.picture.large}
              alt="https://randomuser.me/api/portraits/lego/1.jpg"
            />

            {"Date of birth: " + profile.dob["date"].substring(0, 10)}
            <br></br>
            {"Country: " + profile.location.country}
            <br></br>
            {"Email: " + profile.email}
          </article>
        ))}
      </section>
    </div>
  );
};

export default Profiles;
