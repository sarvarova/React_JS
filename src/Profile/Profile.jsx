import React from "react";
import ProfileForm from "./ProfileForm";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile__wrapper">
          <div className="profile__container">
            <h2 className="profile__title">Профиль</h2>
            <p className="profile__text">Способ оплаты</p>
          </div>
          <ProfileForm />
        </div>
      </div>
    );
  }
}

export default Profile;