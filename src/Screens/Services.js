import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>Solucionamos los problemas de tu empresa creando increíbles aplicaciones:</p>
      <ul>
        <li>Aplicaciones Moviles</li>
        <li>Transformacion digital</li>
        <li>Kioskos digitales</li>
        <li>Desarrollo de Software</li>
        <li>CRM a medida</li>
        <li>ERP a medida</li>
        <li>eCommerce</li>
      </ul>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
    </div>
  );
};

export default Services;
