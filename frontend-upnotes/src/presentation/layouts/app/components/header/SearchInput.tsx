import React from "react";

export const SearchInput: React.FC = () => {
  return (
    <div className="main-layout-search flex flex-center">
      <input
        placeholder="Busca tareas por su nombre"
        type="text"
        className="form__input main-layout-search__input"
      />
      <i className="bx bx-search-alt-2 icon icon--search"></i>
    </div>
  );
};
