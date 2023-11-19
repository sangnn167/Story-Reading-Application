import React from 'react';
import Link from '@/node_modules/next/link';
import styles from '@/app/styles/trangchu.module.css';
import { useSelector } from 'react-redux';

const ListStory = () => {
  const filteredStories = useSelector((state) => state.stories.filteredStories);
  
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        {filteredStories.length > 0 ? (
          <ul>
            {filteredStories.map((story) => (
              <li key={story.id}>
                <div className={styles.card}>
                  <picture>
                    <img
                      src={story.imgUrl}
                      alt={story.title}
                      style={{width: '200px', height: '240px'}}
                    />
                  </picture>
                  <Link href={`/home/${story.id}`}>
                    <h2>{story.title}</h2>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Truyện không tồn tại.</p>
        )}
      </div>
    </div>
  );
};

export default ListStory;
