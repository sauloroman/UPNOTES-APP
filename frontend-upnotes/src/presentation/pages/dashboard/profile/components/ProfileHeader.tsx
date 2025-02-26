import React from "react";
import { Account } from "../../../../../domain/entities";
import { ProfilePhoto, ProfilePhotoButtons } from "./";

interface Props {
  user: Account | null;
}

export const ProfileHeader: React.FC<Props> = ({ user }) => {
  return (
    <header className="profile-header">
      <div className="profile-header__container">
        <div className="profile-header__information">
          <div>
            <h2 className="profile__heading">Tu Perfil</h2>
            <p>Configura tus datos y actualiza tu información</p>
          </div>
          <div className="profile-header__basic">
            <ProfilePhotoButtons />
            <ProfilePhoto photo={user?.profile.image} userName={user?.name} />
          </div>
        </div>
      </div>
    </header>
  );
};
