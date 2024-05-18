import React, { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_te4sebm","template_c3fl2xr", form.current, "e5PE-ri7GbTMc6-Xx").then(
      (result) => {
        console.log(result.text);
        alert("¡El formulario se envió con éxito!");
      },
      (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
      }
    );
  };



  return (
    <div name="Contacto" className={styles.contact}>
      <h2>Contacto</h2>
      <form className={styles.form} ref={form} onSubmit={sendEmail} >
        <label for="Name">Nombre</label>
        <input id="Name" name="user_name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input
          id="Email"
          name="user_mail"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Mensaje</label>
        <textarea id="Message" name="message" className={styles.textArea}></textarea>
        <button type="submit" value='Send'>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
