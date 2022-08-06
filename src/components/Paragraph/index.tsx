import { IconProps } from 'phosphor-react'
import * as S from './styles'

type Props = {
  icon?: React.ElementType<IconProps>
  reference?: string
  title: string
  weight: 'bold' | 'normal'
  color: string
  size: string
}

export function Paragraph({
  icon: Icon,
  reference,
  title,
  weight,
  color,
  size
}: Props) {
  return (
    <S.ParagraphContainer>
      {Icon && <Icon size={14} color={`${color}`} />}
      <S.ParagraphElem
        style={{
          fontWeight: `${weight}`,
          fontSize: `${size}`,
          color: `${color}`
        }}
      >
        {reference} {title}
      </S.ParagraphElem>
    </S.ParagraphContainer>
  )
}
