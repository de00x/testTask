import { Header } from './components/Header'
import { Middle } from './components/Middle'
import { FC } from 'react'
import styles from './Main.module.scss'

export const Main: FC = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Middle />
    </div>
  )
}
