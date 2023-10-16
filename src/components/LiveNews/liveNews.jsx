import React, { useState, useEffect } from 'react';
import { StyledContainer } from './liveNews.styles'

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = 'e95a847233f24e628c2f6acd780de6db'; // My actual NewsAPI key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setNewsData(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

    return (
      <StyledContainer>
    <div className='liveNews'>
      <h1>Latest Updates</h1>
      <ul>
        {newsData.map((article, index,description, publishedAt) => (
            <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" >
              Read more  
                </a>
                <span class="liveAuthor">       {article.author}</span>
          </li>
        ))}
      </ul>
            </div>
     </StyledContainer>
  );
};

export default News;
