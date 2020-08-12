import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

// below is header css file
import "./Header.css";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
            alt="Youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icon">
        <VideoCallIcon className="header__Icons" />
        <AppsIcon className="header__Icons" />
        <NotificationsIcon className="header__Icons" />

        <Avatar
          alt="Dinesh katariya"
          src="https://yt3.ggpht.com/a-/AOh14GhOTPDtqxBDn8uUY1HfOHk3FP6evD1vGnF5Ruzz_A=s88-c-k-c0xffffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};

export default Header;
