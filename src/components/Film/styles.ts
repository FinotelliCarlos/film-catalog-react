import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FilmContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 12rem;
  width: 100%;
  min-height: 10rem;
  height: 100%;
  margin: 0.1rem 0.2rem;
  background: var(--primaryMiddle);
  border-radius: 0.4rem;
  border: 1px solid var(--primarySmall);
  cursor: pointer;
  text-decoration: none;
`

export const FilmBanner = styled.img`
  width: 100%;
  border-radius: 0.4rem 0.4rem 0 0;
  border-bottom: 1px solid var(--mainSmall);
`

export const ContentBox = styled.div`
  padding: 0.2rem 0.3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.3rem;
`
