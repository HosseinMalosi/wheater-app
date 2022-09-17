import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/currentStore";
import CurrentAction from "../../store/currentStore";
import classes from "../../App.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { FiSearch } from "react-icons/fi";
import { useHistory, useParams } from "react-router-dom";

const HomeSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams()
  const cityRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(params);
    dispatch(fetchData(cityRef.current.value));
    history.push(`/home/${cityRef.current.value}`);
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
