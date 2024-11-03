// src/Video.tsx
import React, { useState } from "react";

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=uIpWjRR3KmM",
    title: "From Yoruba Tradition to Global Fashion: The Journey of Aso Oke",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=7ED4pjHUmDY",
    title: "Latest female styles of aso-ebi 2024",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=KbcydBsyvsw",
    title: "MODERN AND STYLISH AGBADA WEARS FOR MEN 2024",
  },
];

const Video: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter videos based on search query
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        color: "#1125ba",
        overflow: "hidden",
        backgroundColor: "#191c2e", // Set a solid background color
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#f0f01f", // Changed to the specified color
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            padding: "15px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "2.5em", fontWeight: "bold", margin: 0 }}>
            Aso Ebi Video Gallery
          </h1>
        </div>
        
        <h2 style={{ textAlign: "center", color: "#747aa8" }}>Explore Our Videos!</h2>

        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              width: "100%",
              maxWidth: "400px",
              color: "black", // Set text color to black
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              style={{
                background: "rgba(255, 255, 255, 1)", // Set to fully opaque
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                padding: "15px",
                overflow: "hidden",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{video.title}</h3>
              <iframe
                width="100%"
                height="315"
                src={video.url.replace("watch?v=", "embed/")} // Convert URL for embedding
                title={video.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
