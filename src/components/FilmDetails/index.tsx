import { CaretLeft, FilmSlate, FilmStrip, VideoCamera } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FilmProps } from '../Films'
import { Loading } from '../Loading'
import { Paragraph } from '../Paragraph'
import * as S from './styles'

export function FilmDetails() {
  const { id } = useParams()
  const navigation = useNavigate()
  const [film, setFilm] = useState<FilmProps>({} as FilmProps)

  function handleBack() {
    navigation(-1)
  }

  useEffect(() => {
    fetch(`https://filmcatalogapinode.herokuapp.com/films/${id}`)
      .then(res => res.json())
      .then(data => {
        setFilm(data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <>
      {film.title ? (
        <>
          <S.ButtonGoBack onClick={handleBack}>
            <CaretLeft size={22} /> Voltar ao inicio
          </S.ButtonGoBack>
          <S.FilmDetailsContainer>
            <S.SectionImage>
              <S.FilmDetailsBanner src={film.image} />
            </S.SectionImage>
            <S.SectionContent>
              <Paragraph
                icon={FilmStrip}
                reference="Filme:"
                title={film.title}
                size=".9rem"
                color="var(--secondarySmall)"
                weight="bold"
              />
              <Paragraph
                title={film.description}
                size=".8rem"
                color="var(--secondaryStrong)"
                weight="normal"
              />
              <Paragraph
                icon={FilmSlate}
                reference="Direção:"
                title={film.director}
                size=".9rem"
                color="var(--secondarySmall)"
                weight="normal"
              />
              <Paragraph
                icon={VideoCamera}
                reference="Produção:"
                title={film.producer}
                size=".9rem"
                color="var(--secondarySmall)"
                weight="normal"
              />
            </S.SectionContent>
          </S.FilmDetailsContainer>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
