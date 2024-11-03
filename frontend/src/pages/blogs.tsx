import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post. It's informative and engaging.",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post. Learn more about interesting topics.",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third blog post. Enjoy reading!",
    author: "Alice Johnson",
  },
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqz2rVEH6oYcIMMLCieOJHK21ZCIQiWE0-Uw&s')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#1125ba",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome to Aso Ebi Blog!</h1>
      <h2 style={{ textAlign: "center", color: "#ddd" }}>Look up what you seek in our blogs</h2>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
            color: "black", 
          }}
        />
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredBlogs.map((blog) => (
          <li key={blog.id} style={{ margin: "20px 0" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                padding: "15px",
                transition: "transform 0.2s",
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#1a0dab",
                  textDecoration: "underline",
                  fontSize: "18px",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 0",
                }}
              >
                {blog.title}
              </button>
              <div style={{ color: "#888", fontSize: "14px" }}>By {blog.author}</div>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "30px" }}>
        {filteredBlogs.length === 0 ? (
          <p style={{ color: "#777" }}>No blogs found. Try a different search.</p>
        ) : (
          <p style={{ color: "#f7f5f5" }}>Select a blog to read.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
