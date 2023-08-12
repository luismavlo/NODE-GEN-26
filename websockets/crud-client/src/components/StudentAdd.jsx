import React from "react";

export const StudentAdd = () => {
  return (
    <>
      <h3 className="mb-5">Agregar Estudiantes</h3>

      <form>
        <input
          type="text"
          placeholder="Ingresar Estudiante"
          className="form-control"
        />
      </form>
    </>
  );
};
