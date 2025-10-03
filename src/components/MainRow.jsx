import React from "react";
import "../styles/MainRow.css";

/**
 * FeatureRow Component
 * Props:
 * - reverse (boolean): If true, show image on left and text on right.
 * - dark (boolean): If true, text block uses dark background.
 * - title (string): Heading text.
 * - description (string): Paragraph text.
 * - buttonText (string): Button or link text.
 * - buttonHref (string): Link URL.
 * - buttonType ("invite" | "stories"): For styling the button/link.
 * - imageSrc (string): Image source path.
 * - imageAlt (string): Alt text for image.
 */
export function MainRow({
  reverse = false,
  dark = false,
  title,
  description,
  buttonText,
  buttonHref = "#",
  buttonType = "stories",
  imageSrc,
  imageAlt,
}) {
  return (
    <div className={`feature-row${reverse ? " reverse" : ""}`}>
      <div className={`feature-text${dark ? " dark" : " light"}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={buttonHref}
          className={
            buttonType === "invite"
              ? "feature-link invite-link"
              : "feature-link stories-link"
          }
        >
          {buttonText}
          {buttonType === "stories" && <span className="arrow">→</span>}
        </a>
      </div>
      <div className="feature-img">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}