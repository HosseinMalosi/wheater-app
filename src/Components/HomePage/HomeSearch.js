import React from "react";
import classes from '../../App.module.css';
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { FiSearch } from "react-icons/fi";

const HomeSearch = () => {
  return (
    <section className={classes.homeSec}>
      <div>
        <h2>Wheater App</h2>
      </div>
      <form>
        <Input type="text" placeHolder="Enter City ..."></Input>
        <Button type="submit" text={<FiSearch />} className="" />
      </form>
    </section>
  );
};

export default HomeSearch;
