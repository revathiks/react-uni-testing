import React from 'react';
import { Logo, Nav, StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { StyledBanner } from './styles/Banner.styled';
import { Button } from './styles/Button.styled';


interface Props {
  bg?:string
}
const Header :React.FC <Props>= () => {
  return (
    <StyledHeader>
        <Container>
            <StyledBanner bg="green"><h1>Looking to hire developers?Visit our Hiring Platform</h1></StyledBanner>
            <Nav>
              <Logo src='./images/logo-desktop.svg' />
              <ul>
                <li>challenges</li>
                <li>solutions</li>
                <li>resources</li>
              </ul>
              <Button bg="black" color='white'>Click me</Button>
            </Nav>
        </Container>
        
    </StyledHeader>
  )
}

export default Header