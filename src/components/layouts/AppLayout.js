import React from "react";
import Navbar from "../Navbar";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {/* Main content */}
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};

export default AppLayout;
