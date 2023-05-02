import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <h2 className="section-header">Resume</h2>
        <a
          href="https://docs.google.com/document/d/1tcH5x6Jte58DLaURWaaEAl2854c9zDCZY7sl1egOu4Q/export?format=pdf"
          download
        >
          <h4>Click here to download a copy of my resume.</h4>
        </a>
        <br />
        <iframe
          src="https://docs.google.com/document/d/1tcH5x6Jte58DLaURWaaEAl2854c9zDCZY7sl1egOu4Q/edit?usp=sharing"
          className="resume"
          title="myResume"
        ></iframe>
      </article>
    </section>
  );
}
