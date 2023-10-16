import React from 'react'
import { ModelDiamond as Icon } from "react-basicons";
import { StyledContainer} from './spotlight.style';

function Spotlight() {
    return (
        <StyledContainer>
            <div className="spotlight-section">
                <div className="title">NEWS</div>
                <p className= "description">THE LATEST AND MOST IMPORTANT NEWS FOR YOU</p>
                <div className="dividers-container">
                    <div className="divider" />
                    <div className="icon-container"><Icon/></div>
                    <div className="divider" />
                </div>              
            </div> 
        </StyledContainer>
    );
}

export default Spotlight
