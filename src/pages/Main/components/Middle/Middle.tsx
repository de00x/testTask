import { MiddleHeader, MiddleRows } from './components'
import styles from './styles/Middle.module.scss'
import { Sidebar } from '../Sidebar'
import { FC } from 'react'

export const Middle: FC = (): JSX.Element => {
  return (
    <div className={styles.middleWrapper}>
      <Sidebar />
      <div className={styles.middleContainer}>
        <MiddleHeader />
        <MiddleRows />
      </div>
    </div>
  )
}
