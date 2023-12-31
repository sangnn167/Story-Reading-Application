"use client";
import styles from "@/app/styles/profile.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Favourite from "@/app/profile/favourite/page";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTabIndex } from "../store/slice/readstories";
import History from "./History/page";
import Header from "../header/page";


const Profile = () => {

  const dispatch = useDispatch();
  const { selectedTabIndex } = useSelector((state: any) => state.stories);

  const handleTabSelect = (index: number) => {
    dispatch(setSelectedTabIndex(index));
  };

  return (
    <div className={styles.containerrrr}>
      <Header />
      <div className={styles.tabcontainer}>
        <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
          <TabList className={styles.tablist}>
            <Tab className={`${styles.tab} ${Object.is(selectedTabIndex, 0) ? styles.tabselected : ''}`}>
              Truyện yêu thích
            </Tab>
            <Tab className={`${styles.tab} ${Object.is(selectedTabIndex, 1) ? styles.tabselected : ''}`}>
              Lịch sử đọc
            </Tab>
          </TabList>
          <TabPanel className={styles.tabpanel}>
            <Favourite />
          </TabPanel>
          <TabPanel className={styles.tabpanel}>
            <History />
          </TabPanel>
        </Tabs>
      </div >
    </div>

  );
};
export default Profile;
