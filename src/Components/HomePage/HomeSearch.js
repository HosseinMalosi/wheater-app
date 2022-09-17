import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/currentStore";
import CurrentAction from "../../store/currentStore";
import classes from "../../App.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { FiSearch } from "react-icons/fi";

const HomeSearch = () => {
  const dispatch = useDispatch();
  const cityRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(fetchData(cityRef.current.value))
    console.log('hi');
  };

  return (
    <section className={classes.homeSec}>
      <div>
        <h2>Wheater App</h2>
      </div>
      <form onSubmit={submitHandler}>
        <Input type="text" placeHolder="Enter City ..." ref={cityRef} />
        <Button type="submit" text={<FiSearch />} className="" />
      </form>
    </section>
  );
};

export default HomeSearch;
