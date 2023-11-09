import storiesData from "../data/stories";
const SearchStorie = () => {
  return (
    <div>
      <ul>
        {storiesData.map((story) => (
          <li key={story.id}>
            <h2>{story.id}</h2>
            <h2>{story.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchStorie;
