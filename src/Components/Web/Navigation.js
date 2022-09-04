import React from "react";
import classes from "../../App.module.css";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { FiHome, FiSearch } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link className={classes.logo}>
          <GiWorld className={classes.Black} />
          <h2>Wheater App</h2>
        </Link>
      </div>
      <ul>
        <li>
          <Link>
            <FiHome />
          </Link>
        </li>
        <li>
          <Link>
            <FiSearch />
          </Link>
        </li>
      </ul>
      <Button className="" text={<HiLightBulb />} />
    </header>
  );
};

export default Navigation;
