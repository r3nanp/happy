import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Button } from 'components/Button'
import { pulse } from 'animations/variants'
import * as S from './styles'

export function HomeTemplate() {
  const { push } = useRouter()

  return (
    <S.Container>
      <S.Content>
        <div className="image-wrapper">
          <Image src="/img/logo-full.svg" alt="Logo" width={300} height={300} />
        </div>

        <div className="text">
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </div>
      </S.Content>

      <S.Children>
        <Image src="/img/children.svg" alt="Logo" width={500} height={500} />
      </S.Children>

      <S.Wrapper>
        <S.Access>
          <Button type="button" onClick={() => push('/sign-in')}>
            Acesso restrito
          </Button>
        </S.Access>

        <Link href="/orphanages" passHref>
          <motion.a
            animate="pulseEffect"
            variants={pulse}
            whileHover={{ scale: 1.2 }}
            className="arrow"
          >
            <S.ArrowIcon />
          </motion.a>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}
