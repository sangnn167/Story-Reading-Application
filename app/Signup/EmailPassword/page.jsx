
import React from "react";
import InputField from "../../Common/InputField/page";
import { useDispatch, useSelector } from "react-redux";
import {setEmail,setPassword,} from "../../store/slice/signupSlice";
import styles from "../styles.module.css";

const EmailPassword = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.signup);
  return (
    <>
      <InputField
        className={styles.inputfield}
        type="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <InputField
        className={styles.inputfield}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
      />
    </>
  );
};

export default EmailPassword;
