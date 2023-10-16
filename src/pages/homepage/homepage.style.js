import styled from "styled-components";

export const StyledContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   .content{
    width: 1140px;
    min-height: 100vh;
    .news-container{
      padding-top: 50px;
      display: flex;
      .articles-section{
         display: flex;
         
         max-width:78%;
         flex-wrap: wrap;
         border-right: solid 1px black;
         

      }
      .quick-info-section{
         max-width: 22%;
         margin-left:18px ;
      }
    }
    
   }
`