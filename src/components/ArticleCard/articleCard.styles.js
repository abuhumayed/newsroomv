import styled from "styled-components";

export const StyledContainer = styled.div`
margin :0px 15px 15px 15px;
    display: flex;
flex-direction: column; 

    max-width: 400px;
    align-items: center;
    img{
                  max-width: 400px;
    }

    .title{
       
        font-size: 25px;
        font-family: ${props => props.theme.fonts.secondary};
        text-align : center ;

    }

    .divider{
        margin-top: 13px;
        margin-bottom: 2px;
        height : 1px;
        width: 45%;
        border-radius: 10px;
        background-color: black;
       
    }

    .description{
       
        font-size: 15px;
        font-family: ${props => props.theme.fonts.secondary};
        text-align: center;
        padding: 12px;
        font-weight: 300;
        color : black;


    }

    .data-section{
        display : flex;
        justify-content: space-between;
        align-items: center ;
        width: 70%;
        

        span{
            padding-left: 2px;
            font-size: 13px;

        }

        .vertical-centred{
            display: flex;
            align-items: center;
        }

        .more{
            text-decoration: underline;
        }
    }
}

`