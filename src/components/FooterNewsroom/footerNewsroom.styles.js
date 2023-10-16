import styled from "styled-components";

export const StyledContainer = styled.div`
.footer {
  background-color: black;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-family: ${(props)=> props.theme.fonts.primary};
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-links {
  margin: 10px 0;

}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 600;
  &:hover {
            background-color : red;
            color: black;
        }
}

.footer-text {
  font-size: 12px;
  margin-top: 10px;
}

`