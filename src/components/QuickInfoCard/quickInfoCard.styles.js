import styled from "styled-components";

export const StyledContainer = styled.div`
    .quick-card{
       
        font-family: ${(props) => props.theme.fonts.secondary};
        margin-bottom: 20px;
    
        
        .title{
            font-size: clamp(10rem,30vw +1rem,20rem);
            font-weight: 600;
            
            
            
        }
        .description{
            width: fit-content;
            font-size: clamp(5rem,15vw +1rem,10rem);
            padding-top: 5px;
            font-weight: 300;
        }
    }
`