import React from "react";
import { useContext } from "react";
import Appcontext from "../context/AppContext";
import { FaEye } from "react-icons/fa";
import "../styles/Item.scss";
function Item(props) {
  const { item, eliminar } = props;
  console.log(item);
  //   address: "BARRIO EL CENTRO";
  //   city: "SN ANTONIO DEL NORTE";
  //   date: "2022-08-10T06:00:00.000Z";
  //   email: "angelaro3001@gmail.com";
  //   idNumber: "1705198400621";
  //   name: "MARIA ANGELA ROMERO ROMERO";
  //   passport: "E433001";

  //   phone: "97521128";
  const abrirPDF = () => {
    window.open(
      `http://${process.env.REACT_APP_HOST}:3000/api/v1/pdfs/archivos/${item.pdf}`,
      "_blank"
    );
  };
  return (
    <div className={"item"}>
      <div className="item-foto item-elemento">
        <img
          src={`http://${process.env.REACT_APP_HOST}:3000/api/v1/pdfs/photos/${item.pdf}`}
          alt="perfil"
          className="foto"
        ></img>
      </div>
      <div className="item-datos  item-elemento">
        <p className="datos-linea">
          <b>Id: </b>
          {item.id}
        </p>
        <p className="datos-linea">
          <b>Nombre: </b> <br />
          {item.name}
        </p>
        <p className="datos-linea">
          <b>Ciudad: </b>
          <br />
          {item.city}
        </p>
        <p className="datos-linea">
          <b>Ciudad: </b>
          <br />
          {item.city}
        </p>
        <p className="datos-linea">
          <b>Direccion: </b>
          <br />
          {item.address}
        </p>
      </div>
      <div className="item-actions  item-elemento">
        <button className="btnbuscar btnVer" onClick={abrirPDF}>
          <FaEye></FaEye>
        </button>
      </div>
    </div>
  );
}

export default Item;
