import React from "react";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div
      id="about"
      className="youtube-embed-container w-full  h-full flex-col justify-center items-center text-center"
    >
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
