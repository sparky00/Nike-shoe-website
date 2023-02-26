import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoBox = () => {
  return (
    <div id="Middle-Box" className="Box">
      <YoutubeEmbed embedId="lBpS4FXC51s" />
      <br />
      <span>
        Bring
        <br />
        Inspiration
      </span>
      <div>
        <span>And</span>
        <br />
        <span>Innovation</span>
        <br />
        <span>To</span>
        <br />
        <span>Every</span>
        <br />
        <span>ATHLETE*</span>
        <br />
        <span>In The</span>
        <br />
        <span>World</span>
        <br />
        <span style={{ fontFamily: "Apple Chancery, cursive" }}>
          *If you have a body, you are an athlete
        </span>
      </div>
      <div>
      <br />
      <br />
        <span>
          We champion continual progress for athletes and sport by taking action
          to help athletes reach their potential. Every job at NIKE, Inc. is
          grounded in a team-first mindset, cultivating a culture of innovation
          and a shared purpose to leave an enduring impact.
        </span>
      </div>
    </div>
  );
};

export default VideoBox;
