import styles from './styles/Main.module.scss'
import { Header } from './components/Header'
import { Middle } from './components/Middle'
import { FC } from 'react'

export const Main: FC = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Middle />
    </div>
  )
}
