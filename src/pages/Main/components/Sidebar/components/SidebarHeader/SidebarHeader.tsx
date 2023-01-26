import { ReactComponent as Arrow } from '../../img/arrow.svg'
import styles from '../../styles/Sidebar.module.scss'
import { FC } from 'react'

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
