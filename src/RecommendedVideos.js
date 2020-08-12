import React from "react";
import Video from "./Video";
import "./Video.css"; // video.css is impported here bcz props as a component passed here

import "./RecommendedVideos.css";

const RecommendedVideos = () => {
  return (
    <div className="RecommendedVideos">
      <h2>Recommended</h2>

      <div className="RecommendedVideos__videos">
        <Video
          title="Become web developer | 8/10/2020"
          views="2.3M views"
          timestamp="1 days a go"
          channelImage="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
          channel="Programming 101"
          image="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
        />
        <Video
          title="Become python web developer | 9/10/2020"
          views="2M views"
          timestamp="3 days a go"
          channelImage="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
          channel="Programming 101"
          image="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />

        <Video
          title="js introduction | 8/10/2020"
          views="0.3M views"
          timestamp="4 days a go"
          channelImage="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
          channel="Programming 101"
          image="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />

        <Video
          title="fitness GYM | 8/10/2020"
          views="2.32M views"
          timestamp="3 days a go"
          channelImage="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg"
          channel="Gym"
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />

        <Video
          title="fitness GYM | 12/10/2020"
          views="1.32M views"
          timestamp="1 days a go"
          channelImage="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg"
          channel="Gym"
          image="https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg"
        />

        <Video
          title="stretching body | 12/10/2020"
          views="5M views"
          timestamp="1 days a go"
          channelImage="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg"
          channel="Gym"
          image="https://images.pexels.com/photos/4077/healthy-person-woman-sport.jpg"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
