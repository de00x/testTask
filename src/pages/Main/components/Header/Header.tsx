import { ReactComponent as Square } from './img/square.svg'
import { ReactComponent as Arrow } from './img/arrow.svg'
import { FC } from 'react'
import styles from './Header.module.scss'

export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSquare}>
        <Square />
      </div>
      <div className={styles.headerArrow}>
        <Arrow />
      </div>
      <div className={styles.headerTextView}>Просмотр</div>
      <div className={styles.headerTextManagement}>Управление</div>
    </div>
  )
}
