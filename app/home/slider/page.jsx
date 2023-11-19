import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/app/styles/trangchu.module.css";
import storiesData from "../../Mock/stories";
import { FaEye,FaHeart,FaComment} from "react-icons/fa";
import Link from "next/link";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const MySlider = () => {
  return (
    <Slider {...settings} className={styles.sliderr}>
      {storiesData.map((story) => (
        <div key={story.id} className={styles.storycontainer}>
          <Link href={`/home/${story.id}`}>
            <picture>
              <img
                src={story.imgUrl}
                alt={story.title}
                style={{ width: "180px", height: "220px" }}
              />
            </picture>
            <div className={styles.storytitle}>
              {story.title}
              <div className={styles.storydetail}>
                <div className={styles.storyfollow}><FaEye/>{story.follow}</div>
                <div className={styles.storyfollow}><FaHeart/>{story.favorites}</div>
                <div className={styles.storyfollow}><FaComment />{story.comment.length}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
