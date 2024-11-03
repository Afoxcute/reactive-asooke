import React, { useState } from 'react';

// Sample article data
const articlesData = [
  { id: 1, title: "Understanding React", content: "This article explains the basics of React..." },
  { id: 2, title: "Getting Started with TypeScript", content: "TypeScript is a typed superset of JavaScript..." },
  { id: 3, title: "Exploring JavaScript ES6 Features", content: "ES6 introduced many new features..." },
  
];

const Article: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articlesData.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
    
      <div style={{ marginRight: '20px', width: '200px' }}>
        <h3>Search Articles</h3>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      
      <div style={{ flex: 1 }}>
        <h2>Articles</h2>
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <div
              key={article.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '20px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Article;
