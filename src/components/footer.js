
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (   
     <footer>
      <h2>
        Created by{" "}
        <a href="mailto:elizabethlopez0108@gmail.com">
          {" "}
          Elizabeth Lopez-Lopez, 2023
        </a>
      </h2>
      <a
        href="https://www.linkedin.com/in/elizabeth-lopez-lopez-345b3b14a/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" color="white" />
      </a>
      --
      <a
        href="https://github.com/elizabeth189"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" color="grey" />
      </a>
    </footer>
  );
}
