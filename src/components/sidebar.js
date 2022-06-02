import React from "react";

// Sidebar
function SideBar() {
  return (
    <div className="glass-card side-bar hidden-md">
      <h4 className="name p-3 m-0 pb-0">
        <div className="bg-white text-orange py-2 crv-8 display-center">
          <img
            src="img/our_logo.png"
            alt=""
            className="img-fluid px-2"
            height={40}
          />
        </div>
      </h4>

      <div className="px-3 pb-3">
        <img
          src="img/400_400.jpg"
          alt="Interns 2022"
          className="img-fluid side-banner crv-8"
        />
      </div>

      <div className="key-points">
      </div>
    </div>
  );
}

// Export sidebar
export default SideBar;
