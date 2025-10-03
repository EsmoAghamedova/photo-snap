import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/design-system.css";
import "../styles/Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Lock scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.classList.contains('burger')) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Hide menu if resizing above tablet
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show burger on tablet & mobile
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const showBurger = windowWidth <= 768;

  return (
    <header className="header">
      <Link to="/" className="home-link">
        <img src={logo} alt="Photosnap logo" className="logo" />
      </Link>

      {/* Nav links: visible except mobile */}
      <nav className={`main-nav${windowWidth <= 650 ? " hide" : ""}`}>
        <ul>
          <li>
            <Link to="/stories">STORIES</Link>
          </li>
          <li>
            <Link to="/features">FEATURES</Link>
          </li>
          <li>
            <Link to="/pricing">PRICING</Link>
          </li>
        </ul>
      </nav>

      {/* "Get an Invite": visible except mobile */}
      <button className={`inviteBtn desktopBtn${windowWidth <= 650 ? " hide" : ""}`}>
        GET AN INVITE
      </button>

      {/* Burger: visible on tablet & mobile */}
      {showBurger && !isOpen && (
        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded="false"
          onClick={() => setIsOpen(true)}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      )}

      {/* Mobile Nav Menu */}
      {isOpen && (
        <nav ref={navRef} className="mobile-nav show">
          <div className="mobile-nav-header">
            <Link to="/" className="home-link">
              <img src={logo} alt="Photosnap logo" className="logo" />
            </Link>
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <span className="close-x"></span>
            </button>
          </div>
          <ul>
            <li>
              <Link to="/stories" onClick={() => setIsOpen(false)}>STORIES</Link>
            </li>
            <li>
              <Link to="/features" onClick={() => setIsOpen(false)}>FEATURES</Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setIsOpen(false)}>PRICING</Link>
            </li>
          </ul>
          <hr className="divider" />
          <button className="inviteBtn mobileBtn">GET AN INVITE</button>
        </nav>
      )}
    </header>
  );
}