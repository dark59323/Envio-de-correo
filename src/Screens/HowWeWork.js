import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " Identificamos necesidades y objetivos del cliente",
      id: 1,
    },
    {
      text: " Analizamos el proyecto y definimos especificaciones del mismo",
      id: 2,
    },
    {
      text: " Realizamos el desarrollo y programación del software",
      id: 3,
    },
    {
      text: " Hacemos pruebas y revisiones",
      id: 4,
    },
    {
      text: " Documentamos el proyecto",
      id: 5,
    },
    {
      text: " Entregamos el software para su puesta en marcha",
      id: 6,
    },
  ];

  return (
    <div name="ComoTrabajamos" className={styles.howWeWork}>
      <h2 className={styles.title}>Asi trabajamos</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
