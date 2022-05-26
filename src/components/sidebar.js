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
          src="img/me_head.png"
          alt="Hernie Jabien"
          className="img-fluid side-banner crv-8"
        />
      </div>

      <div className="key-points">
        {/* <ul className="text-white pl-5 pr-2 list-unstyled">
                    <li className="big"></li>
                    <li>
                        <span className="font-weight-bold">Contact: </span><br />
                        <i className="ion-email text-white"></i>
                        <span className="ml-2">herniejabien45@gmail.com</span><br />
                        <i className="ion-ios-telephone text-white"></i>
                        <span className="ml-2">09397724280</span>
                    </li>
                    <li>
                        <span className="font-weight-bold">Web Development: </span><br />
                        <span>HTML/CSS/Javascript, Wordpress, Laravel, ReactJs, Django, Vue</span>
                    </li>
                    <li>
                        <span className="font-weight-bold">Mobile Application: </span><br />
                        <span>Java, Flutter, React native</span>
                    </li>
                    <li>
                        <span className="font-weight-bold">Databases: </span><br />
                        <span>Firebase, Mysql, Monggo DB, Postgres SQL, Sqlite</span>
                    </li>
                </ul> */}
      </div>
    </div>
  );
}

// Export sidebar
export default SideBar;
