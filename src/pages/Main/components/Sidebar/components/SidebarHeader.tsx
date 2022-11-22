import { ReactComponent as Arrow } from '../img/arrow.svg'
import { FC } from 'react'
import styles from '../Sidebar.module.scss'

export const SidebarHeader: FC = (): JSX.Element => {
  return (
    <div className={styles.sidebarHeaderContainer}>
      <div className={styles.sidebarHeaderText}>
        <div>Название проекта</div>
        <div>Аббревиатура</div>
      </div>
      <div className={styles.sidebarHeaderArrow}>
        <Arrow />
      </div>
    </div>
  )
}
