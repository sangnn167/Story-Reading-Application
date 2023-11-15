"use client";
import InputField from "../Common/InputField/page";
import { Button } from "@nextui-org/react";
import styles from "./styles.module.css";
import Link from "next/link";
import LoadingOverlay from "../Common/LoadingOverlay/page";
import { useDispatch, useSelector } from "react-redux";
import {  setLoading } from "../store/slice/signupSlice";
import { loginUser } from "../Service/apiService"
import EmailPassword from "../Signup/EmailPassword/page";

const Login = () => {
  const dispatch = useDispatch();
  const {password, email, loading } = useSelector((state) => state.signup);

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        window.location.href = "/home";
        dispatch(setLoading(true));
      } else {
        alert("Email hoặc mật khẩu không đúng");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.signupcontainer}>
          <h1>Login</h1>
          <div className={styles.form}>
            <EmailPassword/>
            <div className={styles.bottom}>
              Do not have an account?
              <div className={styles.Loginhere}>
                <Link href={`/Signup`}>Register here</Link>
              </div>
              {loading && <LoadingOverlay />}
            </div>
            <Button className={styles.button} onClick={handleLogin} disabled={loading}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
