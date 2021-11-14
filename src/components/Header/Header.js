import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "./header.css";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const currentUser = useSelector(selectUser);
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <a href="/">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt=""
          />
        </a>
      </div>
      <div className="header__middle">
        <div className="header__middle__container">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <TuneIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar
          className="avatar-icon"
          onClick={() => setIsLogout(!isLogout)}
          src={currentUser?.photoURL}
        />

        {isLogout && (
          <div className="logout" onClick={() => dispatch(logout())}>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
