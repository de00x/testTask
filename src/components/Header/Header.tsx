import { ReactComponent as ArrowLeft } from './img/arrowLeft.svg'
import { ReactComponent as Square } from './img/square.svg'
import styles from './styles/Header.module.scss'
import { FC } from 'react'

export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles.headerContainer}>
      <Square />
      <ArrowLeft />
      <div className={styles.viewingText}>
        Просмотр<span></span>
      </div>
      <div className={styles.managementText}>Управление</div>
    </div>
  )
}
