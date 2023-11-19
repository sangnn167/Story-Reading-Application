import React from "react";

const StoryImage = ({ selectedStory }) => {
  return (
    <div>
      <picture>
        <img
          src={selectedStory.imgUrl}
          alt={selectedStory.title}
          style={{ width: "230px", height: "300px" }}
        />
      </picture>
    </div>
  );
};

export default StoryImage;
