"use client";
import styles from "@/app/styles/header.module.css";
import { GiBookshelf } from "react-icons/gi";
import {SideMenu} from "./SideMenu/page";
import {MenuDeskTop} from "./MenuDesktop/page"

const Header = () => {

  return (
    <div className={styles.menu}>
      <div className={styles.sidemenumobile}>
        <SideMenu />
      </div>
      <div className={styles.header}>
        <MenuDeskTop/>
        <div className={styles.logo}>
          <div className={styles.img}>
            <GiBookshelf />
          </div>
          <div>
            <div className={styles.titlelogo}>
              THE BOOKTOWN
            </div>
            <div>
              Your place to read
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};
export default Header;
