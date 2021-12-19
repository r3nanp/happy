import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { pulse } from 'animations/variants'
import * as S from './styles'

export function HomeTemplate() {
  return (
    <S.Container
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
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
        <S.Location>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </S.Location>

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
