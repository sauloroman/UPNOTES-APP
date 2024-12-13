import React from "react";
import { useAuth } from "../../../../shared/redux-hooks";

export const UserPhoto: React.FC = () => {

  const { user } = useAuth()

  return (
    <div className="flex flex-center">
      <p className="main-layout-photo--default flex flex-center">{user?.name[0]}</p>
    </div>
  );
};
