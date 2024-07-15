import React from "react";
import Footer from "../partials/footer";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <form>
          <input
            name="name"
            placeholder="Nombre"
            className="name-contact"
            required
          />
          <input
            name="emailaddress"
            placeholder="Email"
            className="email-contact"
            type="email"
            required
          />
          <textarea
            rows="4"
            cols="50"
            name="subject"
            placeholder="Mensaje"
            className="message-contact"
            required
          ></textarea>
          <input
            name="submit"
            className="btn-contact"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export { Contact };
