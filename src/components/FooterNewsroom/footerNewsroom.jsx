import React from 'react'
import { StyledContainer } from './footerNewsroom.styles'

function footerNewsroom() {
  return (
    <StyledContainer>
      <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">THE NEWSROOM</div>
      <div className="footer-links">
        <a href = '/'>Home</a>
        <a href = '/'>News</a>
        <a href = '/'>Categories</a>
        <a href = '/'>About Us</a>
        <a href = '/'>Contact</a>
      </div>
    </div>
    <p className="footer-text">© {new Date().getFullYear()} THE NEWSROOM All rights reserved.</p>
  </footer>
    </StyledContainer>
  )
}

export default footerNewsroom
