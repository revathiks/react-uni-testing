import styled from "styled-components"

export const StyledBanner =styled.div<{ bg: string }>`
display:flex;
width:100%;
background-color:${({bg}:any)=>bg}
`