import styled from 'styled-components'

export const FilmDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  border: 1px solid var(--primarySmall);
  background: var(--primaryMiddle);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SectionImage = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`

export const SectionContent = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

export const FilmDetailsBanner = styled.img`
  width: 20vw;
  border-radius: 0.3rem;
  border: 1px solid var(--primarySmall);

  @media screen and (max-width: 768px) {
    height: 60%;
  }
`

export const ButtonGoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  color: var(--secondaryStrong);
  gap: 1rem;
  padding: 0.3rem;
  background: none;
  border: none;
  cursor: pointer;
`
