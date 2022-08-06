import styled from 'styled-components'

export const FilmsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`

export const FilmsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`

export const ButtomList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ButtonSkip = styled.button`
  background: var(--mainStrong);
  color: var(--secondaryMiddle);
  font-weight: bold;
  font-size: 0.9rem;
  padding: 1rem;
  border-radius: 0.4rem;

  transition: all 0.2s;

  :hover {
    background: var(--mainSmall);
  }
`
