"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../store/slice/signupSlice";
import { Button } from "@nextui-org/react";
import LoadingOverlay from "../Common/LoadingOverlay/page";
import styles from "./styles.module.css";
import Link from "next/link";
import EmailPassword from "./EmailPassword/page";
import { signupUserr } from "../Service/apiService"
import NameAge from "./NameAge/page";


const Signup = () => {
  const dispatch = useDispatch();
  const { yearold, name, password, email, loading } = useSelector((state) => state.signup);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async () => {
    if (!yearold || !name || !password || !email) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    dispatch(setLoading(true));

    try {
      await signupUserr({ yearold, name, password, email });
      setSuccessMessage("Đăng ký thành công!");
    } catch (error) {
      alert(`Đã có lỗi xảy ra. ${error.message}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupcontainer}>
        <h1>Register</h1>
        <div className={styles.form}>
          <NameAge/>
          <EmailPassword />
          <div className={styles.bottom}>
            Have already an account?
            <div className={styles.Loginhere}>
              <Link href={`/Login`}>Login here</Link>
            </div>         
            {loading && <LoadingOverlay />} 
          </div>
          <div>
            {successMessage && <p>{successMessage}</p>}
            </div>
          <Button
            className={styles.button}
            onClick={handleSignup}
            disabled={loading}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
