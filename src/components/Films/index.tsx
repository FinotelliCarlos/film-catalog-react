import axios from 'axios'
import { useEffect, useState } from 'react'
import { Film } from '../Film'
import { Loading } from '../Loading'
import * as S from './styles'

export type FilmProps = {
  _id: string
  title: string
  description: string
  image: string
  director: string
  producer: string
}

export function Films() {
  const [films, setFilms] = useState<FilmProps[]>([])
  const [numberOfPages, setNumberOfPages] = useState()
  const [page, setPage] = useState()

  useEffect(() => {
    axios
      .get(`https://filmcatalogapinode.herokuapp.com/films?page=${page}`)
      .then(res => {
        setFilms(res.data.docs)
        setNumberOfPages(res.data.pages)
      })
      .catch(err => {
        console.log(err)
      })
  }, [page])

  return (
    <>
      {films.length >= 1 ? (
        <>
          <S.ButtomList>
            {Array.from(Array(numberOfPages), (item, index) => {
              return (
                <S.ButtonSkip
                  value={index + 1}
                  onClick={(e: any) => setPage(e.target.value)}
                >
                  {index + 1}
                </S.ButtonSkip>
              )
            })}
          </S.ButtomList>

          <S.FilmsContainer>
            {films.map(item => {
              return (
                <S.FilmsBox>
                    <Film key={item._id} filmData={item} />
                </S.FilmsBox>
              )
            })}
          </S.FilmsContainer>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
