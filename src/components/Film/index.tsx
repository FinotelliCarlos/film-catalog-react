import { FilmSlate, FilmStrip } from 'phosphor-react'

import { Paragraph } from '../Paragraph'
import * as S from './styles'

type Props = {
  filmData: {
    _id: string
    image: string
    title: string
    producer: string
    director: string
  }
}

export function Film({ filmData }: Props) {
  return (
    <S.FilmContainer to={`/${filmData._id}`}>
      <S.FilmBanner src={`${filmData.image}`} />
      <S.ContentBox>
        <Paragraph
          icon={FilmSlate}
          title={filmData.title}
          weight="normal"
          color="var(--secondarySmall)"
          size=".7rem"
        />

        <Paragraph
          icon={FilmStrip}
          reference="Direção:"
          title={filmData.director}
          weight="normal"
          color="var(--secondarySmall)"
          size=".7rem"
        />
      </S.ContentBox>
    </S.FilmContainer>
  )
}
