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
        <img  src="/images/chevron-down.svg" />
      </button>
    </div>
    <div className="sidebar-info_more">
      <div className="separator" />
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <img  src="/images/mail-outline.svg" />
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
            <img src="/images/phone-portrait-outline.svg" />
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
            <img  src="/images/calendar-outline.svg" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <time dateTime="1982-06-23">Mar 19, 1999</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <img  src="/images/location-outline.svg" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Faridabad, Haryana</address>
          </div>
        </li>
      </ul>
      <div className="separator" />
      <ul className="social-list">
          <a
            href="https://www.linkedin.com/in/chirag-gandhi-7642b3b2/"
            className="social-link"
          >
            <img  src="/images/logo-linkedin.svg" />
          </a>
          <a
            href="https://medium.com/@chiraggandhi70726"
            className="social-link"
          >
            <img  src="/images/bookmark-outline.svg" />
          </a>
          <a href="https://instagram.com/code.scope" className="social-link">
            <img  src="/images/logo-instagram.svg" />
          </a>
      </ul>
    </div>
  </aside>
        </>
    )
}
export default Sidebar;