import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

export const FooterParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mainSmall);
  gap: 0.4rem;
`

export const FooterLink = styled.a`
  color: var(--mainSmall);
  text-decoration: none;

  transition: all 0.3s;

  :hover {
    color: var(--secondaryStrong);
  }
`
