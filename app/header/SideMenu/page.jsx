import styles from "@/app/styles/header.module.css";
import Link from "@/node_modules/next/link";
import { useState } from "react";
import { GiHamburgerMenu, GiBookshelf } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slice/signupSlice";

export const SideMenu = () => { 
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()); 
    window.location.href = "/Login"; 
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    setShowSubmenu(false);
  };

  const openSubmenu = () => {
    if (isExpanded) {
      setShowSubmenu(true);
    }
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  const closeSubmenuAndToggleMenu = () => {
    setShowSubmenu(false);
    setIsExpanded(false);
  };
  return (
    <div className={`${styles.sidemenu} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.menuitemm} onClick={toggleMenu}>
        <div className={styles.iconmenu}>
          <GiHamburgerMenu />
        </div>
        <div className={styles.logo}>
          <div className={styles.img}>
            <GiBookshelf />
          </div>
          <div className={styles.content}>
            <div className={styles.titlelogo}>THE BOOKTOWN</div>
            <div className={styles.tagline}>Your place to read</div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className={styles.titlemenu}>
          <Link href="/home">
            <div
              className={styles.menuitem}
              onClick={closeSubmenuAndToggleMenu}
            >
              Trang chủ
            </div>
          </Link>
          <div
            className={styles.menuitem}
            onMouseEnter={openSubmenu}
            onMouseLeave={closeSubmenu}
          >
            Thể loại
            {showSubmenu && (
              <div>
                <hr />
                <div className={styles.submenu}>
                  <div className={styles.submenucolumn}>
                    <div className={styles.menuitem}>
                      <a href="/category/entertaining">Giải trí</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/Detective">Trinh thám</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/one-shot">One shot</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/manga">Manga</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/ecchi">Ecchi</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/seinen">Seinen</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/sliceoflife">Slice of Life</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/supernatural">Supernatural</a>
                    </div>
                  </div>
                  <div className={styles.submenucolumn}>
                    <div className={styles.menuitem}>
                      <a href="/category/fairytale">Cổ tích</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/children-story">Thiếu nhi</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/mecha">Mecha</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/harem">Harem</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/psychological">Psychological</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/tragedy">Tragedy</a>
                    </div>
                    <div className={styles.menuitem}>
                      <a href="/category/smut">Smut</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/profile">
            <div className={styles.menuitem}>Cá nhân</div>
          </Link>
          <div className={styles.menuitem}><button onClick={handleLogout}>Đăng xuất</button></div>
        </div>
      )}
    </div>
  );
};
