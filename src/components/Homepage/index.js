import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer/footer";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      if (currentPage === "About") {
        handlePageChange("Portfolio");
      }
      if (currentPage === "Portfolio") {
        handlePageChange("Resume");
      }
      if (currentPage === "Resume") {
        handlePageChange("Contact");
      }
      if (currentPage === "Contact") {
        handlePageChange("About");
      }
    } else if (isRightSwipe) {
      if (currentPage === "About") {
        handlePageChange("Contact");
      }
      if (currentPage === "Portfolio") {
        handlePageChange("About");
      }
      if (currentPage === "Resume") {
        handlePageChange("Portfolio");
      }
      if (currentPage === "Contact") {
        handlePageChange("Resume");
      }
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
