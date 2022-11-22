import { MiddleHeader, MiddleRows } from './components'
import { Sidebar } from '../Sidebar'
import { FC } from 'react'
import styles from './Middle.module.scss'

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
