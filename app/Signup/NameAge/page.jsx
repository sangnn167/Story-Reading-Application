import React from "react";
import InputField from "../../Common/InputField/page";
import { useDispatch, useSelector } from "react-redux";
import { setName, setYearold } from "../../store/slice/signupSlice";
import styles from "../styles.module.css";

const NameAge = () => {
  const dispatch = useDispatch();
  const { name, yearold } = useSelector((state) => state.signup);
  return (
    <>
      <InputField
        className={styles.inputfield}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <InputField
        className={styles.inputfield}
        type="text"
        placeholder="Year old"
        value={yearold}
        onChange={(e) => dispatch(setYearold(e.target.value))}
      />
    </>
  );
};

export default NameAge;
