import { TiHome } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa6";
import Link from "@/node_modules/next/link";
import styles from "@/app/styles/header.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slice/signupSlice";
import { TbLogout2 } from "react-icons/tb";

export const MenuDeskTop = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()); 
    window.location.href = "/Login"; 
  };
  return (
    <div className={styles.headermenu}>
      <ul>
        <li>
          <Link href="/home">
            <div className={styles.item}>
              <div className={styles.icons}>
                <TiHome />
              </div>
              Trang chủ
            </div>
          </Link>
        </li>
        <li>
          <div className={styles.pastebutton}>
            <div className={styles.item}>
              <div className={styles.icons}>
                <TfiMenuAlt />
              </div>
              Thể loại
            </div>
            <div className={styles.dropdowncontent}>
              <div className={styles.show}>
                <a className={styles.top} href="/category/fairytale">
                  Cổ tích
                </a>
                <a className={styles.bottom} href="/category/entertaining">
                  Giải trí
                </a>
                <a className={styles.bottom} href="/category/Detective">
                  Trinh thám
                </a>
                <a className={styles.bottom} href="/category/children-story">
                  Thiếu nhi
                </a>
                <a className={styles.bottom} href="/category/one-shot">
                  One shot
                </a>
                <a className={styles.bottom} href="/category/mecha">
                  Mecha
                </a>
                <a className={styles.bottom} href="/category/manga">
                  Manga
                </a>
                <a className={styles.bottom} href="/category/harem">
                  Harem
                </a>
                <a className={styles.bottom} href="/category/ecchi">
                  Ecchi
                </a>
                <a className={styles.bottom} href="/category/psychological">
                  Psychological
                </a>
                <a className={styles.bottom} href="/category/seinen">
                  Seinen
                </a>
                <a className={styles.bottom} href="/category/tragedy">
                  Tragedy
                </a>
                <a className={styles.bottom} href="/category/sliceoflife">
                  Slice of Life
                </a>
                <a className={styles.bottom} href="/category/smut">
                  Smut
                </a>
                <a className={styles.bottom} href="/category/supernatural">
                  Supernatural
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/profile/">
            <div className={styles.item}>
              <div className={styles.iconss}>
                <FaUser />
              </div>
              Cá Nhân
            </div>
          </Link>
        </li>
        <li>
          <div className={styles.item}>
            <div className={styles.icons}>
            <TbLogout2 />
            </div>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
