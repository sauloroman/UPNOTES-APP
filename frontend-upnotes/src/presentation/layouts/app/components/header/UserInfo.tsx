import React from "react";
import { useAuth } from "../../../../shared/redux-hooks";

export const UserInfo: React.FC = () => {

  const { user, profile } = useAuth()

  return (
    <div className="main-layout-user">
      <p className="main-layout-user__name">{user?.name}</p>
      <p className="main-layout-user__career">{profile?.profession ?? 'Sin carrera asignada'}</p>
    </div>
  );
};
