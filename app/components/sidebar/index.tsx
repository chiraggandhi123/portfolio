import React from 'react';
import './index.css'
const Sidebar = ()=>{
    return (
        <>
        <aside className="sidebar" data-sidebar="">
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img
          src="/images/my-avatar.png"
          alt="Richard hanrick"
          width={80}
        />
      </figure>
      <div className="info-content">
        <h1 className="name" title="Chirag Gandhi">
          Chirag Gandhi{" "}
        </h1>
        <p className="title">Web developer</p>
      </div>
      <button className="info_more-btn" data-sidebar-btn="">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down" />
      </button>
    </div>
    <div className="sidebar-info_more">
      <div className="separator" />
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a
              href="mailto:chiraggandhi70726@gmail.com"
              className="contact-link"
            >
              chiraggandhi70726@gmail.com
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel:+12133522795" className="contact-link">
              +91 9582501754
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="calendar-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <time dateTime="1982-06-23">Mar 19, 1999</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Faridabad, Haryana</address>
          </div>
        </li>
      </ul>
      <div className="separator" />
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/chirag-gandhi-7642b3b2/"
            className="social-link"
          >
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://medium.com/@chiraggandhi70726"
            className="social-link"
          >
            <ion-icon name="bookmark" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://instagram.com/code.scope" className="social-link">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
        </>
    )
}
export default Sidebar;