import React from 'react'
import { StyledContainer } from './articleCard.styles'
import { ThumbsUp as Like, CommentChatMessageAlt as Comment, ArrowRight } from 'react-basicons'


function ArticleCard({img,title,description,likeCount,commentCount}) {
  return (
    <StyledContainer>
        <div className="article-card">
                      <img src={img} alt="" />
              <div className="title">{ title }</div>
                      <div className="divider"/>
              <div className="description">{ description}</div>
                      <div className="data-section">
                          <div className="like-icon vertical-centred">
                              <Like size={16}/>
                      <span className='like-icon'>{ likeCount}</span>
                          </div>
                          <div className="comments-icon vertical-centred">
                              <Comment size={16}/>
                      <span >{ commentCount}</span>
                          </div>
                          <div className="more vertical-centred">
                            
                      <span>More....</span>
                      <ArrowRight size={16}/>
                          </div>

                      </div>
                  </div>
    </StyledContainer>
  )
}

export default ArticleCard
