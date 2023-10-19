import  { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledContainer } from './liveNews.styles';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = '0d7160397647d12964b734ce9b0778ba'; // Replace with your GNews API key
    const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`;

    axios
      .get(apiUrl)
      .then(response => setNewsData(response.data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <StyledContainer>
      <div className="liveNews">
        <h1>Latest Updates</h1>
        <ul>
          {newsData.map(article => (
            <li key={article.url}>
              <h2 className='title'>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
              <span className="liveAuthor">{article.source.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledContainer>
  );
};

export default News;




