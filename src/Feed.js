import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyPX-2o3EX8w80NlzaVKiiabDDxsmlrp-tA&usqp=CAU"
        }
        username={"Barrr"}
        message={"woww"}
        timestamp={"This is timestamp"}
        image={
          "https://bettertogether.intelcia.com/sites/default/files/2020-07/Well%20Being-%20importance%20vie%20sociale.jpg"
        }
      />
      <Post
        profilePic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyPX-2o3EX8w80NlzaVKiiabDDxsmlrp-tA&usqp=CAU"
        }
        username={"Barrr"}
        message={"woww"}
        timestamp={"This is timestamp"}
        image={
          "https://bettertogether.intelcia.com/sites/default/files/2020-07/Well%20Being-%20importance%20vie%20sociale.jpg"
        }
      />{" "}
      <Post
        profilePic={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyPX-2o3EX8w80NlzaVKiiabDDxsmlrp-tA&usqp=CAU"
        }
        username={"Barrr"}
        message={"woww"}
        timestamp={"This is timestamp"}
        image={
          "https://bettertogether.intelcia.com/sites/default/files/2020-07/Well%20Being-%20importance%20vie%20sociale.jpg"
        }
      />
    </div>
  );
}

export default Feed;
