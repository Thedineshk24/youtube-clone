import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./searchPage.css";
import Video from "./Video";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg"
        channel="Programmer 101"
        verified
        subs="500K"
        noOfVideos={500}
        description="you can find awesome programming 101 tutorials here ............"
      />
      <hr />

      <VideoRow
        views="1.5M"
        subs="1M"
        description="ReactJs 101"
        title="React.Js"
        timestamp="1 Day a go"
        channel="programmer 101"
        image="https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg"
      />

      <VideoRow
        views="1.5M"
        subs="1M"
        description="ReactJs 101"
        title="React.Js Functional Components"
        timestamp="1 Day a go"
        channel="programmer 101"
        image="https://images.pexels.com/photos/7350/startup-photos.jpg"
      />

      <VideoRow
        views="0.9M"
        subs="100K"
        description="ReactJs 101"
        title="React.Js introduction"
        timestamp="2 Day a go"
        channel="programmer 101"
        image="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
      />

      <VideoRow
        views="0.7M"
        subs="100K"
        description="ReactJs 101"
        title="React.Js Hooks"
        timestamp="12 Day a go"
        channel="programmer 101"
        image="https://images.pexels.com/photos/7361/startup-photos.jpg"
      />

      <VideoRow
        views="0.2M"
        subs="100K"
        description="ReactJs 101"
        title="React.Js Props"
        timestamp="13 Day a go"
        channel="programmer 101"
        image="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg"
      />
    </div>
  );
};

export default SearchPage;
