import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }

  &.active {
    color: #007bff;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <Logo>我的博客</Logo>
        <NavLinks>
          <StyledNavLink to="/" end>首页</StyledNavLink>
          <StyledNavLink to="/books">书籍</StyledNavLink>
          <StyledNavLink to="/about">关于我们</StyledNavLink>
          <StyledNavLink to="/contact">联系我们</StyledNavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;