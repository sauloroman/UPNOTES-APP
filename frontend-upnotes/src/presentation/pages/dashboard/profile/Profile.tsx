import React from "react";
import { LayoutProfile } from '../../../layouts/profile/LayoutProfile'
import { useAuth } from "../../../shared/redux-hooks";
import { ProfileHeader } from "./components";

export const Profile: React.FC = () => {

  const { user } = useAuth()

  return (
    <LayoutProfile>
      <div className="profile">
        <ProfileHeader user={user} />

        <div className="profile__container">
          <h2 className="profile__subheading">Tu información Personal</h2>  
          <div className="profile-grid">

            <ul className="profile-grid__list">
              <div className="profile-grid__field">
                <p className="profile-grid__label">Id Registrado</p>
                <p className="profile-grid__value">{ user?.id }</p>
              </div>
              <div className="profile-grid__field">
                <p className="profile-grid__label">Nombre Completo</p>
                <p className="profile-grid__value">{ user?.name }</p>
              </div>
              <div className="profile-grid__field">
                <p className="profile-grid__label">Genero</p>
                <p className="profile-grid__value">{ user?.gender === 'M' ? 'Masculino' : 'Femenino' }</p>
              </div>
              <div className="profile-grid__field">
                <p className="profile-grid__label">Correo Electrónico</p>
                <p className="profile-grid__value">{ user?.email }</p>
              </div>
            </ul>

            <ul className="profile-grid__list">
              <div className="profile-grid__field">
                <p className="profile-grid__label">Dirección</p>
                <p className="profile-grid__value">{ user?.profile.address }</p>
              </div>
              <div className="profile-grid__field">
                <p className="profile-grid__label">Teléfono</p>
                <p className="profile-grid__value">{ user?.profile.phone }</p>
              </div>
              <div className="profile-grid__field">
                <p className="profile-grid__label">Profesión</p>
                <p className="profile-grid__value">{ user?.profile.profession }</p>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </LayoutProfile>
  );
};
