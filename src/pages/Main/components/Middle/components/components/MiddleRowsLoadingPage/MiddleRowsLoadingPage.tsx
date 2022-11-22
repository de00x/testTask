import { FC } from 'react'
import styles from '../MidSubComp.module.scss'

export const MiddleRowsLoadingPage: FC = (): JSX.Element => {
  return (
    <div className={styles.middleRowsLoadingPage}>
      <div>Loading...</div>
      <div>Loading...</div>
      <div>Loading...</div>
      <div>Loading...</div>
      <div>Loading...</div>
    </div>
  )
}
