import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryMiddle);
  border-bottom: 2px solid var(--primarySmall);
  padding: 0.3rem 0.5rem;
  margin-bottom: 0.5rem;
`

export const HeaderLogo = styled.h1`
  font-size: 1.7rem;
  color: var(--mainSmall);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`

export const Logo = styled.img`
  width: 2rem;
`
