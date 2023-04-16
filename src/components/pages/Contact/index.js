import React from "react";

export default function Contact() {
  return (
    <section id="contact-me">
      <article className="content section-alt">
        <h2 className="section-header">Contact</h2>
        <br />
        <article className="contact-address">
          <h3 className="my-name">Elizabeth Lopez-Lopez</h3>
          <br />
          <p className="addresses">Phone : (239) 370-5122</p>
          <br />
          <p className="addresses">
            Email: <a href="mailto:elizabethlopez0108@gmail.com">elizabethlopez0108@gmail.com</a>
          </p>
          <br />
          <p className="addresses">
            GitHub:{" "}
            <a
              href="https://github.com/elizabeth189"
              target="_blank"
              rel="noreferrer"
            >
              @elizabeth189
            </a>
          </p>
          <br />
          <p className="addresses">
            <a
              href="https://www.linkedin.com/in/elizabeth-lopez-lopez-345b3b14a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </article>
      </article>
    </section>
  );
}
