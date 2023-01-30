import { MiddleHeader, ParentRow, Sidebar } from './components'
import styles from './styles/Main.module.scss'
import { FC } from 'react'

export const Main: FC = (): JSX.Element => {
  return (
    <div className={styles.mainWrapper}>
      <Sidebar />
      <div className={styles.middleWrapper}>
        <MiddleHeader />
        <ParentRow />
      </div>
    </div>
  )
}
