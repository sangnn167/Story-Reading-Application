import Table from "react-bootstrap/Table";
import storiesData from "@/app/data/stories";
import styles from "@/app/styles/trangchu.module.css";
import Link from "@/node_modules/next/link";
const NewStory = () => {
  return (
    <Table className={styles.table} striped bordered hover>
      <thead>
        <tr>
          <th className={styles.td}>Tên truyện</th>
          <th className={styles.td}>Thể loại</th>
          <th className={styles.td}>Chương</th>
          <th className={styles.td}>Thời gian</th>
        </tr>
      </thead>
      <tbody>
        {storiesData.slice(0, 15).map((story) => (
          <tr key={story.id}>
            <td className={styles.td}>
              <Link href={`/home/${story.id}`}>{story.title}</Link>
            </td>
            <td className={styles.td}>{story.category}</td>
            <td className={styles.td}>
              <Link
                href={`/home/${story.id}/${
                  story.chapters.slice(-1)[0].chapterNumber
                }`}
              >
                Chương {story.chapters.slice(-1)[0].chapterNumber}
              </Link>
            </td>
            <td className={styles.td}>
              {story.chapters.slice(-1)[0].chapterDatePosted}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default NewStory;
