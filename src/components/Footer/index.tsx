import { Heart } from 'phosphor-react'
import * as S from './styles'

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterParagraph>
        Feito com <Heart size={16} color="var(--mainSmall)" weight="bold" /> por{' '}
        <S.FooterLink href="https://github.com/FinotelliCarlos">
          Carlos Finotelli
        </S.FooterLink>
      </S.FooterParagraph>
    </S.FooterContainer>
  )
}
