import { Spotlight } from '../../components/Spotlight'
import { ArticleCard } from '../../components/ArticleCard'
import { LiveNews } from '../../components/LiveNews'
import { StyledContainer } from './homepage.style'


import articles from "../../data/articles.json"
import QuickInfoCard from '../../components/QuickInfoCard/quickInfoCard'
import quick from "../../data/quick.json"

function Homepage(props) {
  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        
        <div className="news-container">
          <div className="articles-section">

            {/* Mapping through articles JSON file array */}
            {articles.map(({urlToImage,title,description,commentCount,likeCount}) => (
              <ArticleCard
                key = {title}
                img={urlToImage}
                title={title}
                description={description}
                commentCount={commentCount}
                likeCount={likeCount}
              />
            )
            ) }
             <LiveNews/>
            
          </div>
          <div className="quick-info-section">
        

            {/* Mapping through quick JSON file array */}
            
            {quick.map(({title,description})=> (
              <QuickInfoCard
                key = {title}
              title={title}
              description={description}
              />
            ))}
          </div>
        </div>
      </div>
    
    </StyledContainer>
    
  );
  
}

export default Homepage;
