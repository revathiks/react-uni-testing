import styled from "styled-components";

export const StyledHeader=styled.header`
display:flex;
align-item:center;
color:${({theme})=>theme.colors.header}
`

export const Nav = styled.nav`
display:flex;
align-item: center;
justify-content: space-between;
border-bottom:1px solid #cccccc;
height:auto;
vertical-align: middle;
    width: 100%

ul {
    list-style-type: none;
    
}
ul li {
    margin-bottom: 20px;list-style-type: none;display:inline;padding:0 20px;
  }
`

export const Logo =styled.img`
`

export const Menu =styled

