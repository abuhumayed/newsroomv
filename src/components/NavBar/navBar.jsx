import React from 'react'
import { StyledContainer } from './navBar.styles'

export default function NavBar() {
    return (
    <StyledContainer>
    <div>
          <div className="nav-items">
              <span>
              <a href="/">Home</a>
              </span>
              <span>
              <a href="/">Apple</a>
              </span>
              <span>
              <a href="/">Tesla</a>
              </span>
              <span>
              <a href="/">Tech</a>
              </span>
              <span>
              <a href="/">Politics</a>
              </span>
              <span>
              <a href="/">Sports</a>
              </span>
          </div>
            </div>
     </StyledContainer>
  )
}
