import React from "react";
import "./index.css";
import { IonIcon } from "@ionic/react";
const ContactSection = () => {
  return (
    <>
      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox" data-mapbox="">
          <figure>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7022.821329171908!2d77.31095536314648!3d28.34643144639429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb8fd8ebe247%3A0xa2039d86a2ab1d65!2sChawla%20Colony%2C%20Sector%204%2C%20Ballabhgarh%2C%20Faridabad%2C%20Haryana%20121004%2C%20India!5e0!3m2!1sen!2sbd!4v1714112626592!5m2!1sen!2sbd"
              width={400}
              height={300}
              loading="lazy"
            />
          </figure>
        </section>
        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <form action="#" className="form" data-form="">
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required={true}
                data-form-input=""
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required={true}
                data-form-input=""
              />
            </div>
            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required={true}
              data-form-input=""
              defaultValue={""}
            />
            <button
              className="form-btn"
              type="submit"
              disabled={false}
              data-form-btn=""
            >
              <IonIcon name="paper-plane" />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactSection;
