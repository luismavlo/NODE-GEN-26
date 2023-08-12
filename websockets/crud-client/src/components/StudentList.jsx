import React from "react";

export const StudentList = () => {
  return (
    <>
      <h3>Estudiantes Actuales</h3>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button className="btn btn-outline-success">+1</button>
            </td>
            <td>
              <input type="text" value="juanito" />
            </td>
            <td>10</td>
            <td>
              <button className="btn btn-outline-danger">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
